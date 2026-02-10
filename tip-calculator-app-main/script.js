// load after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const billInputEl = document.getElementById('bill-input');
  const customInput = document.getElementById('custom-input');
  const peopleInput = document.getElementById('number-of-people');
  const tipButtons = document.querySelectorAll('.js-tip-button');
  const errorText = document.getElementById('people-error');
  const peopleWrapper = peopleInput.closest('.input-wrapper');
  const tipAmtEl = document.querySelector('.tip-amt .amount');
  const totalAmtEl = document.querySelector('.total .amount');
  const resetBtn = document.querySelector('.js-reset-btn');

  let tipPercentage = 0;

  const save = (k, v) => localStorage.setItem(k, String(v));
  const remove = (k) => localStorage.removeItem(k);

  function validatePeople() {
    const n = parseInt(peopleInput.value);
    if (isNaN(n) || n <= 0) {
      errorText.style.display = 'block';
      peopleWrapper.classList.add('error');
      return false;
    } else {
      errorText.style.display = 'none';
      peopleWrapper.classList.remove('error');
      return true;
    }
  }

  function calculateTipAmount() {
    if (!validatePeople()) {
      tipAmtEl.innerText = '$0.00';
      totalAmtEl.innerText = '$0.00';
      remove('tipPerPerson');
      remove('totalPerPerson');
      return;
    }

    let billAmount = parseFloat(billInputEl.value);
    if (isNaN(billAmount)) billAmount = 0;

    const n = parseInt(peopleInput.value);
    if (n <= 0) return;

    const totalTip = billAmount * tipPercentage;
    const tipPerPerson = totalTip / n;
    const totalPerPerson = (billAmount + totalTip) / n;

    tipAmtEl.innerText = `$${tipPerPerson.toFixed(2)}`;
    totalAmtEl.innerText = `$${totalPerPerson.toFixed(2)}`;

    save('tipPerPerson', tipPerPerson.toFixed(2));
    save('totalPerPerson', totalPerPerson.toFixed(2));
  }

  // restore state
  (function restore() {
    const bill = localStorage.getItem('bill');
    const people = localStorage.getItem('people');
    const custom = localStorage.getItem('custom');
    const tipIndex = localStorage.getItem('tipIndex');
    const tipPct = localStorage.getItem('tipPercentage');
    const savedTipPer = localStorage.getItem('tipPerPerson');
    const savedTotalPer = localStorage.getItem('totalPerPerson');

    if (bill) billInputEl.value = bill;
    if (people) peopleInput.value = people;
    if (custom) customInput.value = custom;
    if (tipIndex !== null && tipButtons[Number(tipIndex)]) {
      tipButtons.forEach(b => b.classList.remove('js-active'));
      tipButtons[Number(tipIndex)].classList.add('js-active');
      tipPercentage = parseFloat(tipButtons[Number(tipIndex)].innerText) / 100;
    } else if (tipPct) {
      tipPercentage = parseFloat(tipPct);
    }

    if (savedTipPer && savedTotalPer) {
      tipAmtEl.innerText = `$${Number(savedTipPer).toFixed(2)}`;
      totalAmtEl.innerText = `$${Number(savedTotalPer).toFixed(2)}`;
    } else {
      calculateTipAmount();
    }
  })();

  // listeners that persist state
  billInputEl.addEventListener('input', () => {
    save('bill', billInputEl.value);
    calculateTipAmount();
  });

  peopleInput.addEventListener('input', () => {
    save('people', peopleInput.value);
    validatePeople();
    calculateTipAmount();
  });

  tipButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      tipButtons.forEach(b => b.classList.remove('js-active'));
      btn.classList.add('js-active');
      const val = parseFloat(btn.innerText);
      tipPercentage = isNaN(val) ? 0 : val / 100;
      remove('custom'); customInput.value = '';
      save('tipIndex', idx);
      save('tipPercentage', tipPercentage);
      calculateTipAmount();
    });
  });

  customInput.addEventListener('input', () => {
    const val = parseFloat(customInput.value);
    tipButtons.forEach(b => b.classList.remove('js-active'));
    tipPercentage = isNaN(val) ? 0 : val / 100;
    save('custom', customInput.value);
    remove('tipIndex');
    save('tipPercentage', tipPercentage);
    calculateTipAmount();
  });

  resetBtn.addEventListener('click', () => {
    billInputEl.value = '';
    peopleInput.value = '';
    customInput.value = '';
    tipPercentage = 0;
    tipButtons.forEach(b => b.classList.remove('js-active'));
    errorText.style.display = 'none';
    peopleWrapper.classList.remove('error');
    tipAmtEl.innerText = '$0.00';
    totalAmtEl.innerText = '$0.00';

    // clear persisted values
    ['bill','people','custom','tipIndex','tipPercentage','tipPerPerson','totalPerPerson'].forEach(remove);
  });
});
// 
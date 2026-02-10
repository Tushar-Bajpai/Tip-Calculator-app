let billAmount = 0;
let tipPercentage = 0;
let tipButtons = document.querySelectorAll(".js-tip-button");
function calculateTipPercentage() {

// let tipButtons = document.querySelectorAll(".js-tip-button");

tipButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        
        // A. Handle UI 
        // tipButtons.forEach(btn => btn.classList.remove('js-active'));
        // event.target.classList.add('js-active');

        //  Get the Percentage Value
        let tipText = event.target.innerText; 
        let tipValue = parseFloat(tipText); // Becomes 15 (number)

        // Update the Global Variable
        // Convert to decimal for math 
        tipPercentage = tipValue / 100;

        // Trigger Calculation
        // run the main math function
        calculateTipAmount();
    });
});
}

let numberOfPeopleInput = document.getElementById("number-of-people").value;
let numberOfPeople = parseInt(numberOfPeopleInput);

function calculateTipAmount(){
    let numberOfPeopleInput = document.getElementById("number-of-people").value;
    let numberOfPeople = parseInt(numberOfPeopleInput);

    const billInput = document.getElementById("bill-input").value;
    billAmount = parseFloat(billInput);
    const totalTip = billAmount * tipPercentage;
    // console.log("Total Tip: " + totalTip);

      const errorText   = document.getElementById('people-error');

    if(isNaN(numberOfPeople) || numberOfPeople <= 0) {
        errorText.style.display = "block";
        return;

    } else {
        errorText.style.display = "none";
    }

    const tipPerPerson = totalTip / numberOfPeople;
    const totalPerPerson = (billAmount + totalTip) / numberOfPeople;

    // Update the UI
    document.querySelector(".tip-amt .amount").innerText = `$${tipPerPerson.toFixed(2)}`;
    document.querySelector(".total .amount").innerText = `$${totalPerPerson.toFixed(2)}`;
}


     const resetBtn = document.querySelector(".js-reset-btn");

     resetBtn.addEventListener('click', function() {
        // Reset Global Variables
        billAmount = "";
        tipPercentage = "";
        numberOfPeople = "";

        

        tipButtons.forEach(btn => btn.classList.remove('js-tip-button'));

        // Reset the UI
        document.getElementById("bill-input").value = "";
        document.getElementById("number-of-people").value = "";
        document.querySelector(".tip-amt .amount").innerText = "$0.00";
        document.querySelector(".total .amount").innerText = "$0.00";
     });

    
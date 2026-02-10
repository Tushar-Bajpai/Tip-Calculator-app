# Tip-Calculator-app

A simple, responsive tip calculator & bill splitter built with vanilla HTML, CSS and JavaScript. Enter a bill amount, choose or enter a custom tip percentage, set the number of people and the app shows tip-per-person and total-per-person.

![App Screenshot](./tip-calculator-app-main/preview.jpg)
---

## Live preview
Open `index.html` in your browser or serve the folder with a local server.

Example (PowerShell / Command Prompt):
- cd to project folder:
  - cd "c:\Users\ASUS\OneDrive\Desktop\Bill_calc\tip-calculator-app-main"
- Start a simple HTTP server (Python):
  - python -m http.server 8000
- Visit: http://localhost:8000

---

## Features
- Calculate tip amount per person
- Calculate total per person (bill + tip)
- Pre-set tip buttons (5%, 10%, 15%, 25%, 50%) plus custom input
- Responsive layout for mobile, tablet and desktop
- Fixed logo at top that never overlaps the content
- Accessible focus states and keyboard-friendly controls
- Small footprint — no frameworks required

---

## Usage
1. Enter the bill amount.
2. Select a tip button or enter a custom tip percent.
3. Enter the number of people.
4. Read tip amount / person and total / person on the right panel.
5. Click RESET to clear values.

---

## Files & structure
- index.html — main HTML page
- styles.css — styles (responsive and accessibility-focused)
- script.js — calculator logic (event handlers, validation)
- /images — icons and logo used in UI
- README.md — project documentation

---

## Responsive & accessibility notes
- Fluid typography and layout using CSS clamp() and CSS Grid/Flexbox
- Container always positioned below the fixed logo using CSS variables
- Inputs use visible focus styles for keyboard navigation
- Tested on viewports: 320, 375, 414, 768, 1024, 1440

---

## Development
- Edit files in your preferred editor (VS Code recommended).
- Live reload: use the Live Server extension or the Python server above.
- Add unit tests or enhancements in `script.js` as needed.

---

## Contributing
PRs welcome. For small changes, open an issue with a short description and screenshots. Keep changes focused and include short rationale.

---

## License
Use as you wish. Include a license file if you want to open-source with specific terms.

---

Made with ♥ by Tushar

# Tip Calculator App

A small, responsive tip calculator and bill splitter built with HTML, CSS and JavaScript. Enter a bill amount, choose or enter a custom tip percentage, set the number of people — the app shows tip per person and total per person.

Preview: ./preview.jpg

## Features
- Calculate tip amount per person and total per person
- Preset tip buttons (5, 10, 15, 25, 50) + custom tip input
- Reset button to clear inputs
- Responsive layout for mobile and desktop
- Accessible focus states and simple validation for zero people

## Demo
Open `index.html` in your browser or run a lightweight local server (recommended).

Run locally (Windows / PowerShell):
- Using Python:
  python -m http.server 5500
  (then open http://localhost:5500)
- Using Node (if installed):
  npx http-server -p 5500

Or use the VS Code Live Server extension and open the workspace folder.

## Usage
1. Enter the bill amount in the Bill field.
2. Click a preset tip button or type a percentage into the Custom input.
3. Enter the number of people splitting the bill.
4. The Tip Amount / person and Total / person update automatically.
5. Click RESET to clear all fields.

## Accessibility & Responsiveness
- Uses rem/clamp-based sizing for fluid typography.
- Fixed logo at top with container offset to avoid overlap.
- Breakpoints included for mobile (≤420px), tablet (≤1024px) and large screens (≥1440px).
- Keyboard focus visible on interactive elements.

## Project structure
- index.html — app markup
- styles.css — styles, responsive rules
- script.js — calculation logic and UI handlers
- images/ — assets (logo, icons)
- README.md — project documentation

## Extending / Contributing
- Add unit tests for calculation functions in `script.js`.
- Improve validation (non-numeric input handling).
- Add currency selection and formatting options.

Contributions welcome — open an issue or a PR.

## License
MIT — feel free to reuse and modify.

Made with ♥ by _
``` ````// filepath: c:\Users\ASUS\OneDrive\Desktop\Bill_calc\tip-calculator-app-main\README.md
# Tip Calculator App

A small, responsive tip calculator and bill splitter built with HTML, CSS and JavaScript. Enter a bill amount, choose or enter a custom tip percentage, set the number of people — the app shows tip per person and total per person.

Preview: ./preview.jpg

## Features
- Calculate tip amount per person and total per person
- Preset tip buttons (5, 10, 15, 25, 50) + custom tip input
- Reset button to clear inputs
- Responsive layout for mobile and desktop
- Accessible focus states and simple validation for zero people

## Demo
Open `index.html` in your browser or run a lightweight local server (recommended).

Run locally (Windows / PowerShell):
- Using Python:
  python -m http.server 5500
  (then open http://localhost:5500)
- Using Node (if installed):
  npx http-server -p 5500

Or use the VS Code Live Server extension and open the workspace folder.

## Usage
1. Enter the bill amount in the Bill field.
2. Click a preset tip button or type a percentage into the Custom input.
3. Enter the number of people splitting the bill.
4. The Tip Amount / person and Total / person update automatically.
5. Click RESET to clear all fields.

## Accessibility & Responsiveness
- Uses rem/clamp-based sizing for fluid typography.
- Fixed logo at top with container offset to avoid overlap.
- Breakpoints included for mobile (≤420px), tablet (≤1024px) and large screens (≥1440px).
- Keyboard focus visible on interactive elements.

## Project structure
- index.html — app markup
- styles.css — styles, responsive rules
- script.js — calculation logic and UI handlers
- images/ — assets (logo, icons)
- README.md — project documentation

## Extending / Contributing
- Add unit tests for calculation functions in `script.js`.
- Improve validation (non-numeric input handling).
- Add currency selection and formatting options.

Contributions welcome — open an issue or a PR.

## License
MIT — feel free to reuse and modify.

Made with ♥ by Tushar
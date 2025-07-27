# Copilot Instructions for Personal Finance Planner

## Project Overview

- This is a React + Material-UI application for managing incomes, expenses, and generating monthly/yearly financial reports.
- Bootstrapped with Create React App; see `README.md` for build/test commands and workflow.

## Key Workflows

- **Development:**
  - Start: `npm start` (serves on http://localhost:3000)
  - Build: `npm run build` (outputs to `/build`)
  - Test: `npm test` (interactive watch mode)
  - No `dev` or `preview` scripts; use `serve -s build` for static preview after build.
- **Adding Dependencies:**
  - Use `npm install <package>` for new libraries. Material-UI is the main UI library.

## Architecture & Patterns

- **Main App Structure:**
  - Entry: `src/index.js`, root component: `src/App.js`
  - Routing: `src/Routes.js` (uses `react-router-dom`)
  - Theming: `src/Theme.js` (Material-UI theme customization)
  - Layout: `src/layout/Header.js`, `src/layout/Footer.js`
  - Reusable UI/Effects: `src/reusabel/Particles*.js`
- **Feature Components:**
  - Expense/Income forms: `src/components/ExpenseForm.js`, `src/components/IncomeForm.js`
  - Reports: `src/components/Relatorio.js`, `src/components/NewRelatorio.js`, `src/components/SavedReportsPage.js`, `src/components/SavedReport.js`
  - Charts: `src/components/MonthlyExpensesChart.js`
- **State & Data Flow:**
  - Props are used for passing data and callbacks (e.g., `deleteReport`, `duplicateReport` in `SavedReportsPage.js`).
  - No global state management (Redux/MobX) detected; state is likely managed in parent components or via React Context.

## Conventions & Patterns

- **Material-UI:**
  - Use of `@mui/material` for UI components and theming.
  - Custom styles via `sx` prop and theme palette.
- **Routing:**
  - Use `<Link to={...}>` for navigation; routes are defined in `Routes.js`.
- **File Naming:**
  - Components are PascalCase, grouped by feature in `src/components/`.
  - Reusable effects/utilities in `src/reusabel/`.
- **Language:**
  - Some documentation and UI text in Portuguese (e.g., README, button labels).

## Integration Points

- **External Libraries:**
  - Material-UI (`@mui/material`)
  - React Router (`react-router-dom`)
- **No backend/API integration detected in the provided context.**

## Example Patterns

- To add a new report feature, create a component in `src/components/`, update routing in `Routes.js`, and pass necessary props from parent.
- For new UI effects, add to `src/reusabel/` and import where needed.

## References

- See `README.md` for all available npm scripts and setup instructions.
- For UI/UX, follow Material-UI conventions as seen in existing components.

---

**If any section is unclear or missing important project-specific details, please provide feedback or point to files for deeper analysis.**

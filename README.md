# Personal Finance Planner

Single-page web application for personal financial planning, built with React and Material UI.

The app lets you register income and expenses, organize entries by category/subcategory, save reports, and analyze results with monthly and yearly charts.

## Features

- Income and expense registration
- Paid/unpaid status toggle for entries
- Report summary with income, expenses, and net total
- Saved reports with duplicate and delete actions
- Monthly chart in saved report view
- Yearly chart in saved report view (aggregated by month)
- Full interface translation support:
  - English
  - Portuguese (Brazil)
- Language selector in header with UK and Brazil flags
- Home page title year updates automatically to the current year

## Tech Stack

- React 19
- Material UI
- React Router
- Chart.js + react-chartjs-2
- LocalStorage for local persistence

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open in your browser:

[http://localhost:3000](http://localhost:3000)

## Available Scripts

### npm start

Runs the app in development mode.

### npm test

Runs the test runner in interactive mode.

### npm run build

Builds the production bundle in the build folder.

## Main Routes

- / : Home
- /new-relatorio : Create a new report
- /saved-reports : Saved reports list
- /report/:id : Saved report details and editing

## Language

You can switch the interface language from the header language button, next to the saved reports button.

The selected language is persisted in the browser.

## Data Persistence

Data is stored in LocalStorage.

Keys used:

- savedReports
- income
- expenses
- language

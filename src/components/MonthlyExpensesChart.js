// import React from "react";
// // import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// import { Doughnut } from 'react-chartjs-2';
// import { Box, Container } from "@mui/system";
// import { Typography } from "@mui/material";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const MonthlyExpensesChart = ({ data }) => {
//     const monthOrder = [
//         "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
//         "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
//     ];

//     const sortedData = monthOrder.reduce((acc, month) => {
//         acc[month] = data[month] !== undefined ? data[month] : 0;
//         return acc;
//     }, {});

//     const chartData = {
//         labels: Object.keys(sortedData),
//         datasets: [
//             {
//                 data: Object.values(sortedData),
//                 backgroundColor: [
//                     "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
//                     "#8A2BE2", "#20B2AA", "#FF4500", "#32CD32", "#FFD700", "#DC143C"
//                 ],
//                 hoverBackgroundColor: [
//                     "#FF4365", "#2F90D9", "#E6B800", "#3AA7A7", "#7A4FFF", "#E68A2E",
//                     "#7B1FA2", "#1D9A8A", "#CC3700", "#28A828", "#D4AF37", "#B22222"
//                 ],
//             },
//         ],
//     };

//     return (
//         <Container>
//             <Box sx={{ textAlign: 'center', marginTop: 4 }}>
//                 <Typography variant="h1" sx={{ m: '2rem 0 3rem' }}>Gastos Mensais por Ano</Typography>
//             </Box>
//             <Box sx={{ textAlign: 'center', marginTop: 4, width: '50%', margin: 'auto' }}>
//                 <Doughnut data={chartData} />
//             </Box>
//         </Container>

//     );
// };

// export default MonthlyExpensesChart;

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import { MONTH_KEYS, getMonthLabel, getMonthKey, t } from "../i18n";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const buildChartOptions = (title) => ({
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: title,
    },
  },
});

const sumAmount = (items = []) =>
  items.reduce((acc, item) => acc + Number(item.amount || 0), 0);

const MonthlyExpensesChart = ({
  report,
  savedReports = [],
  language = "en",
}) => {
  if (!report) {
    return null;
  }

  const monthlyIncome = sumAmount(report.income);
  const monthlyExpenses = sumAmount(report.expenses);
  const monthlyBalance = monthlyIncome - monthlyExpenses;

  const monthlyData = {
    labels: [
      t(language, "common.income"),
      t(language, "common.expenses"),
      t(language, "common.totalGeneral"),
    ],
    datasets: [
      {
        label: `${getMonthLabel(report.month, language)} ${report.year}`,
        data: [monthlyIncome, monthlyExpenses, monthlyBalance],
        backgroundColor: [
          "rgba(19, 35, 78, 0.75)",
          "rgba(220, 53, 69, 0.75)",
          "rgba(40, 167, 69, 0.75)",
        ],
      },
    ],
  };

  const initialYearSummary = MONTH_KEYS.reduce((acc, month) => {
    acc[month] = { income: 0, expenses: 0 };
    return acc;
  }, {});

  const yearReports = savedReports.filter(
    (savedReport) => String(savedReport.year) === String(report.year),
  );

  const yearSummary = yearReports.reduce((acc, savedReport) => {
    const monthKey = getMonthKey(savedReport.month);
    if (!monthKey || !acc[monthKey]) {
      return acc;
    }

    acc[monthKey].income += sumAmount(savedReport.income);
    acc[monthKey].expenses += sumAmount(savedReport.expenses);
    return acc;
  }, initialYearSummary);

  const yearlyData = {
    labels: MONTH_KEYS.map((monthKey) => getMonthLabel(monthKey, language)),
    datasets: [
      {
        label: t(language, "common.income"),
        data: MONTH_KEYS.map((month) => yearSummary[month].income),
        backgroundColor: "rgba(19, 35, 78, 0.75)",
      },
      {
        label: t(language, "common.expenses"),
        data: MONTH_KEYS.map((month) => yearSummary[month].expenses),
        backgroundColor: "rgba(220, 53, 69, 0.75)",
      },
    ],
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {t(language, "common.monthlyChart")}
      </Typography>
      <Bar
        options={buildChartOptions(
          `${t(language, "common.monthSummaryOf")} ${getMonthLabel(report.month, language)} ${report.year}`,
        )}
        data={monthlyData}
      />

      <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
        {t(language, "common.yearlyChart")}
      </Typography>
      <Bar
        options={buildChartOptions(
          `${t(language, "common.incomeExpensesOfYear")} ${report.year}`,
        )}
        data={yearlyData}
      />
    </Box>
  );
};

export default MonthlyExpensesChart;

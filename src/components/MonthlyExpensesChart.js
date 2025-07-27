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
import faker from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Entradas e Saídas Mensais",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Entradas",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "rgba(0, 248, 4, 0.5)",
    },
    {
      label: "Saídas",
      data: [42, 4, 50, 61, 92, 35, 30],
      backgroundColor: "rgba(246, 6, 58, 0.5)",
    },
  ],
};

const MonthlyExpensesChart = () => {
  return <Bar options={options} data={data} />;
};

export default MonthlyExpensesChart;

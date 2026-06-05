import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import Relatorio from "./Relatorio";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import Grid from "@mui/material/Grid2";
import ParticlesConfetti from "../reusabel/ParticlesConfetti";
import { t, getMonthOptions, getMonthLabel } from "../i18n";

const NewRelatorio = ({ language = "en" }) => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const savedIncome = JSON.parse(localStorage.getItem("income")) || [];
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setIncome(savedIncome);
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const addIncome = (entry) => {
    setIncome((prev) => [...prev, { ...entry, paid: false }]);
  };

  const addExpense = (entry) => {
    setExpenses((prev) => [...prev, { ...entry, paid: false }]);
  };

  const deleteIncome = (index) => {
    setIncome((prev) => prev.filter((_, i) => i !== index));
  };

  const deleteExpense = (index) => {
    setExpenses((prev) => prev.filter((_, i) => i !== index));
  };

  const togglePaidStatusIncome = (index) => {
    setIncome((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          const wasPaid = item.paid; // Verifica o status anterior
          if (!wasPaid) {
            setShowConfetti(true); // Exibe o confetti apenas se foi marcado como pago
            setTimeout(() => setShowConfetti(false), 1000);
          }
          return { ...item, paid: !item.paid }; // Alterna o status
        }
        return item;
      }),
    );
  };

  const togglePaidStatusExpense = (index) => {
    setExpenses((prev) =>
      prev.map((item, i) => {
        if (i === index) {
          const wasPaid = item.paid; // Verifica o status anterior
          if (!wasPaid) {
            setShowConfetti(true); // Exibe o confetti apenas se foi marcado como pago
            setTimeout(() => setShowConfetti(false), 1000);
          }
          return { ...item, paid: !item.paid }; // Alterna o status
        }
        return item;
      }),
    );
  };

  const saveReport = () => {
    const newReport = {
      id: Date.now(),
      month,
      year,
      income,
      expenses,
    };

    const savedReports = JSON.parse(localStorage.getItem("savedReports")) || [];
    const updatedReports = [...savedReports, newReport];
    localStorage.setItem("savedReports", JSON.stringify(updatedReports));
    setOpenSnackbar(true); // Show the snackbar
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const totalGeneral = totalIncome - totalExpenses;

  return (
    <div>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" sx={{ m: "2rem 0" }}>
          {t(language, "common.planning")}
        </Typography>
        <Typography variant="h5" sx={{ mb: "1rem" }}>
          {t(language, "common.addPeriod")}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <FormControl sx={{ width: "150px" }}>
            <InputLabel id="month-select-label">
              {t(language, "common.month")}
            </InputLabel>
            <Select
              labelId="month-select-label"
              value={month}
              required
              onChange={handleMonthChange}
            >
              {getMonthOptions(language).map((monthOption) => (
                <MenuItem key={monthOption.value} value={monthOption.value}>
                  {monthOption.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: "150px" }}>
            <InputLabel id="year-select-label">
              {t(language, "common.year")}
            </InputLabel>
            <Select
              labelId="year-select-label"
              value={year}
              required
              onChange={handleYearChange}
            >
              {["2024", "2025", "2026", "2027", "2028", "2029", "2030"].map(
                (year, index) => (
                  <MenuItem key={index} value={year}>
                    {year}
                  </MenuItem>
                ),
              )}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4} sx={{ justifyContent: "center" }}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                mt: 4,
                backgroundColor: "Lightgray",
                padding: "20px",
                borderRadius: "4px",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Typography variant="h6">
                {t(language, "common.addIncome")}
              </Typography>
              <IncomeForm addIncome={addIncome} language={language} />
            </Box>

            <Box
              sx={{
                mt: 4,
                backgroundColor: "Lightgray",
                padding: "20px",
                borderRadius: "4px",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Typography variant="h6">
                {t(language, "common.addExpense")}
              </Typography>
              <ExpenseForm addExpense={addExpense} language={language} />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <Typography
              variant="h4"
              sx={{
                m: "30px 0",
                backgroundColor: "Lightgray",
                padding: "20px",
                borderRadius: "4px",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >{`${t(language, "common.reportOf")} ${getMonthLabel(month, language)} ${year}`}</Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                padding: "10px 20px",
                borderRadius: "4px",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {t(language, "common.income")}
            </Typography>
            <Relatorio
              items={income}
              deleteItem={deleteIncome}
              togglePaidStatus={togglePaidStatusIncome}
              showTotal
              language={language}
            />
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                mt: 4,
                padding: "10px 20px",
                borderRadius: "4px",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              {t(language, "common.expenses")}
            </Typography>
            <div>
              <Relatorio
                items={expenses}
                deleteItem={deleteExpense}
                togglePaidStatus={togglePaidStatusExpense}
                showTotal
                language={language}
              />
              {showConfetti && <ParticlesConfetti />}
            </div>
            <Box
              sx={{
                mt: 4,
                backgroundColor: "Lightgray",
                padding: "20px",
                borderRadius: "4px",
                boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Typography variant="h5">
                {t(language, "common.summary")}
              </Typography>
              <Typography variant="body1">{`${t(language, "common.totalIncome")}: £ ${totalIncome.toFixed(2)}`}</Typography>
              <Typography variant="body1">{`${t(language, "common.totalExpenses")}: £ ${totalExpenses.toFixed(2)}`}</Typography>
              <Typography variant="body1">{`${t(language, "common.totalGeneral")}: £ ${totalGeneral.toFixed(2)}`}</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" onClick={saveReport}>
                {t(language, "common.saveReport")}
              </Button>
              <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
              >
                <Alert
                  onClose={handleCloseSnackbar}
                  severity="success"
                  style={{
                    width: "100%",
                    backgroundColor: "green",
                    color: "white",
                    position: "relative",
                    bottom: 100,
                    left: 600,
                  }}
                >
                  {t(language, "common.reportSaved")}
                </Alert>
              </Snackbar>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NewRelatorio;

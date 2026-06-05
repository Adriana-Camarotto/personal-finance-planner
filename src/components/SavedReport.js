import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Button, Snackbar, Alert } from '@mui/material';
import Relatorio from './Relatorio';
import IncomeForm from './IncomeForm';
import ExpenseForm from './ExpenseForm';
import Grid from "@mui/material/Grid2";
import ParticlesConfetti from "../reusabel/ParticlesConfetti";

import MonthlyExpensesChart from "./MonthlyExpensesChart";
import { t, getMonthLabel } from '../i18n';


const SavedReport = ({ language = 'en' }) => {
    const { id } = useParams();
    const [report, setReport] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);


    useEffect(() => {
        const savedReports = JSON.parse(localStorage.getItem('savedReports')) || [];
        const foundReport = savedReports.find((r) => r.id.toString() === id);
        if (foundReport) {
            setReport(foundReport);
        }
    }, [id]);

    const updateReport = (updatedData) => {
        const savedReports = JSON.parse(localStorage.getItem('savedReports')) || [];
        const updatedReports = savedReports.map((r) =>
            r.id.toString() === id ? { ...r, ...updatedData } : r
        );
        localStorage.setItem('savedReports', JSON.stringify(updatedReports));
        setReport(updatedReports.find((r) => r.id.toString() === id));
    };

    const saveReport = () => {
        const savedReports = JSON.parse(localStorage.getItem('savedReports')) || [];
        const updatedReports = savedReports.map((r) =>
            r.id.toString() === id ? report : r
        );
        localStorage.setItem('savedReports', JSON.stringify(updatedReports));
        setOpenSnackbar(true); // Show the snackbar
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    if (!report) {
        return <Typography>{t(language, 'common.reportNotFound')}</Typography>;
    }

    const addIncome = (entry) => {
        const updatedIncome = [...report.income, { ...entry, paid: false }];
        updateReport({ income: updatedIncome });
    };

    const addExpense = (entry) => {
        const updatedExpenses = [...report.expenses, { ...entry, paid: false }];
        updateReport({ expenses: updatedExpenses });
    };

    const deleteIncome = (index) => {
        const updatedIncome = report.income.filter((_, i) => i !== index);
        updateReport({ income: updatedIncome });
    };

    const deleteExpense = (index) => {
        const updatedExpenses = report.expenses.filter((_, i) => i !== index);
        updateReport({ expenses: updatedExpenses });
    };

    const togglePaidStatusIncome = (index) => {
        const updatedIncome = report.income.map((item, i) => {
            if (i === index) {
                const wasPaid = item.paid;
                if (!wasPaid) {
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 1000);
                }
                return { ...item, paid: !item.paid };
            }
            return item;
        });
        updateReport({ income: updatedIncome });
    };

    const togglePaidStatusExpense = (index) => {
        const updatedExpenses = report.expenses.map((item, i) => {
            if (i === index) {
                const wasPaid = item.paid;
                if (!wasPaid) {
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 1000);
                }
                return { ...item, paid: !item.paid };
            }
            return item;
        });
        updateReport({ expenses: updatedExpenses });
    };


    const totalIncome = report.income.reduce((acc, item) => acc + Number(item.amount || 0), 0);
    const totalExpenses = report.expenses.reduce((acc, item) => acc + Number(item.amount || 0), 0);
    const totalGeneral = totalIncome - totalExpenses;
    const savedReports = JSON.parse(localStorage.getItem('savedReports')) || [];

    return (
        <Container sx={{ mt: 4 }}>

            <Typography variant="h1" sx={{ m: '30px 0', textAlign: 'center' }}>{`${t(language, 'common.reportOf')} ${getMonthLabel(report.month, language)} ${report.year}`}</Typography>
            <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                <Grid size={{ xs: 12, md: 3 }}>
                    <Box sx={{ mt: 4, backgroundColor: 'Lightgray', padding: '20px', borderRadius: '4px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        <Typography variant="h6">{t(language, 'common.addIncome')}</Typography>
                        <IncomeForm addIncome={addIncome} language={language} />
                    </Box>

                    <Box sx={{ mt: 4, backgroundColor: 'Lightgray', padding: '20px', borderRadius: '4px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        <Typography variant="h6">{t(language, 'common.addExpense')}</Typography>
                        <ExpenseForm addExpense={addExpense} language={language} />
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 9 }}>
                    <Typography variant="h5" sx={{ m: '30px 0 15px 0', padding: '10px 20px', borderRadius: '4px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', backgroundColor: 'gray', color: 'white' }}>{t(language, 'common.income')}</Typography>
                    <div>
                        <Relatorio
                            items={report.income}
                            deleteItem={deleteIncome}
                            togglePaidStatus={togglePaidStatusIncome}
                            showTotal
                            language={language}
                        />
                        {showConfetti && <ParticlesConfetti />}
                    </div>
                    <Typography variant="h5" sx={{ m: '30px 0 15px 0', padding: '10px 20px', borderRadius: '4px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', backgroundColor: 'gray', color: 'white' }}>{t(language, 'common.expenses')}</Typography>
                    <div>
                        <Relatorio
                            items={report.expenses}
                            deleteItem={deleteExpense}
                            togglePaidStatus={togglePaidStatusExpense}
                            showTotal
                            language={language}
                        />
                        {showConfetti && <ParticlesConfetti />}
                    </div>
                    <Box sx={{ mt: 4, backgroundColor: 'Lightgray', padding: '20px', borderRadius: '4px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        <Typography variant="h5">{t(language, 'common.summary')}</Typography>
                        <Typography variant="body1">{`${t(language, 'common.totalIncome')}: £ ${totalIncome.toFixed(2)}`}</Typography>
                        <Typography variant="body1">{`${t(language, 'common.totalExpenses')}: £ ${totalExpenses.toFixed(2)}`}</Typography>
                        <Typography variant="body1">{`${t(language, 'common.totalGeneral')}: £ ${totalGeneral.toFixed(2)}`}</Typography>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Button variant="contained" onClick={saveReport}>{t(language, 'common.saveReport')}</Button>
                        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                            <Alert onClose={handleCloseSnackbar} severity="success" style={{ width: '100%', backgroundColor: 'green', color: 'white', position: 'relative', bottom: 100, left: 600 }}>
                                {t(language, 'common.reportSaved')}
                            </Alert>
                        </Snackbar>
                    </Box>
                    <MonthlyExpensesChart report={report} savedReports={savedReports} language={language} />
                </Grid>

            </Grid>

        </Container>
    );
};

export default SavedReport;
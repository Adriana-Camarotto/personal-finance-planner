import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import AppRoutes from './Routes';
import Header from './layout/Header';
// import Footer from './layout/Footer';
import theme from './Theme';




const App = () => {

  const fulltheme = createTheme(theme);

  const [savedReports, setSavedReports] = useState(() => {
    const saved = localStorage.getItem('savedReports');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedReports', JSON.stringify(savedReports));
  }, [savedReports]);

  const deleteReport = (id) => {
    const updatedReports = savedReports.filter(report => report.id !== id);
    setSavedReports(updatedReports);
  };

  const duplicateReport = (id) => {
    const reportToDuplicate = savedReports.find(report => report.id === id);
    if (reportToDuplicate) {
      const duplicatedReport = { ...reportToDuplicate, id: Date.now() };
      setSavedReports([...savedReports, duplicatedReport]);
    }
  };




  return (
    <>
      <ThemeProvider theme={fulltheme}>
        <Header />
        <AppRoutes
          savedReports={savedReports}
          deleteReport={deleteReport}
          duplicateReport={duplicateReport}
        />
      </ThemeProvider>
      {/* <Footer /> */}
    </>

  );
};

export default App;
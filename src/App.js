import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import AppRoutes from './Routes';
import Header from './layout/Header';
// import Footer from './layout/Footer';
import theme from './Theme';




const App = () => {

  const fulltheme = createTheme(theme);
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');

  const [savedReports, setSavedReports] = useState(() => {
    const saved = localStorage.getItem('savedReports');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedReports', JSON.stringify(savedReports));
  }, [savedReports]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

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
        <Header language={language} onLanguageChange={setLanguage} />
        <AppRoutes
          savedReports={savedReports}
          deleteReport={deleteReport}
          duplicateReport={duplicateReport}
          language={language}
        />
      </ThemeProvider>
      {/* <Footer /> */}
    </>

  );
};

export default App;
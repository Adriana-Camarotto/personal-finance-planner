import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import AppRoutes from "./Routes";
import Header from "./layout/Header";
// import Footer from './layout/Footer';
import theme from "./Theme";
import { LanguageProvider } from "./contexts/LanguageContext";

const App = () => {
  const fulltheme = createTheme(theme);

  const [savedReports, setSavedReports] = useState(() => {
    const saved = localStorage.getItem("savedReports");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedReports", JSON.stringify(savedReports));
  }, [savedReports]);

  const deleteReport = (id) => {
    const updatedReports = savedReports.filter((report) => report.id !== id);
    setSavedReports(updatedReports);
  };

  const duplicateReport = (id) => {
    const reportToDuplicate = savedReports.find((report) => report.id === id);
    if (reportToDuplicate) {
      const duplicatedReport = { ...reportToDuplicate, id: Date.now() };
      setSavedReports([...savedReports, duplicatedReport]);
    }
  };

  const saveReport = (reportData) => {
    const newReport = {
      id: Date.now(),
      ...reportData,
    };
    setSavedReports([...savedReports, newReport]);
  };

  return (
    <>
      <LanguageProvider>
        <ThemeProvider theme={fulltheme}>
          <Header />
          <AppRoutes
            savedReports={savedReports}
            deleteReport={deleteReport}
            duplicateReport={duplicateReport}
            saveReport={saveReport}
          />
        </ThemeProvider>
      </LanguageProvider>
      {/* <Footer /> */}
    </>
  );
};

export default App;

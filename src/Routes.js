import React from "react";
import { Routes, Route } from "react-router-dom";
import SavedReportsPage from "./components/SavedReportsPage";
import SavedReport from "./components/SavedReport";
import Home from "./components/Home";
import NewRelatorio from "./components/NewRelatorio";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFoundPage from "./components/NotFoundPage";

const AppRoutes = ({
  savedReports,
  deleteReport,
  duplicateReport,
  language,
  setSavedReports,
}) => (
  <Routes>
    <Route path="/" element={<Home language={language} />} />
    <Route
      path="/new-relatorio"
      element={<NewRelatorio language={language} setSavedReports={setSavedReports} />}
    />
    <Route
      path="/saved-reports"
      element={
        <SavedReportsPage
          savedReports={savedReports}
          deleteReport={deleteReport}
          duplicateReport={duplicateReport}
          language={language}
        />
      }
    />
    <Route
      path="/privacy-policy"
      element={<PrivacyPolicy language={language} />}
    />
    <Route path="/report/:id" element={<SavedReport language={language} />} />
    <Route path="*" element={<NotFoundPage language={language} />} />
  </Routes>
);

export default AppRoutes;

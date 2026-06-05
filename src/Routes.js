import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SavedReportsPage from './components/SavedReportsPage';
import SavedReport from './components/SavedReport';
import Home from './components/Home';
import NewRelatorio from './components/NewRelatorio';
import { t } from './i18n';


const AppRoutes = ({ savedReports, deleteReport, duplicateReport, language }) => (
    <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/new-relatorio" element={<NewRelatorio language={language} />} />
        <Route 
            path="/saved-reports" 
            element={<SavedReportsPage 
                        savedReports={savedReports} 
                        deleteReport={deleteReport} 
                        duplicateReport={duplicateReport} 
                        language={language}
                     />} 
        />
        <Route path="/report/:id" element={<SavedReport language={language} />} />
        <Route path="*" element={<h1>{t(language, 'common.notFoundPage')}</h1>} />
    </Routes>
);

export default AppRoutes;
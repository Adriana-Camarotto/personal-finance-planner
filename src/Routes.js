import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SavedReportsPage from './components/SavedReportsPage';
import SavedReport from './components/SavedReport';
import Home from './components/Home';
import NewRelatorio from './components/NewRelatorio';


const AppRoutes = ({ savedReports, deleteReport, duplicateReport }) => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-relatorio" element={<NewRelatorio />} />
        <Route 
            path="/saved-reports" 
            element={<SavedReportsPage 
                        savedReports={savedReports} 
                        deleteReport={deleteReport} 
                        duplicateReport={duplicateReport} 
                     />} 
        />
        <Route path="/report/:id" element={<SavedReport />} />
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
    </Routes>
);

export default AppRoutes;
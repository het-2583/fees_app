import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';
import FacultyManagement from './components/FacultyManagement';
import FeePayment from './components/FeePayment';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/:id" element={<StudentDetail />} />
            <Route path="/faculties" element={<FacultyManagement />} />
            <Route path="/pay-fees" element={<FeePayment />} />
        </Routes>
    </Router>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';
import FacultyManagement from './components/FacultyManagement';
import FeePayment from './components/FeePayment';
import PaymentScheduleDetails from './components/PaymentScheduleDetails'; // Import PaymentDetails component
import Studentinfo from './components/studentinfo';
import Externalfac from './components/externalfac';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/:id" element={<StudentDetail />} />
            <Route path="/faculties" element={<FacultyManagement />} />
            <Route path="/pay-fees" element={<FeePayment />} />
            <Route path="/externalfac" element={<Externalfac />} />
            <Route path="/payment-details" element={<PaymentScheduleDetails />} /> {/* Add PaymentDetails route */}
            <Route path="/studentinfo" element={<Studentinfo />} />
        </Routes>
    </Router>
);

export default App;

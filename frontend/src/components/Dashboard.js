import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [data, setData] = useState({
        total_students: 0,
        total_faculties: 0,
        total_fees: 0,
        total_paid: 0,
        total_remaining: 0,
    });

    useEffect(() => {
        axios.get('/api/dashboard/')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching dashboard data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <div className="dashboard-stats">
                <div>Total Students: {data.total_students}</div>
                <div>Total Faculties: {data.total_faculties}</div>
                <div>Total Fees: {data.total_fees}</div>
                <div>Total Paid: {data.total_paid}</div>
                <div>Total Remaining: {data.total_remaining}</div>
            </div>
        </div>
    );
};

export default Dashboard;

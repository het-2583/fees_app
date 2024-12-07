import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FacultyManagement = () => {
    const [faculties, setFaculties] = useState([]);

    useEffect(() => {
        axios.get('/api/faculties/')
            .then(response => {
                setFaculties(response.data);
            })
            .catch(error => {
                console.error('Error fetching faculties:', error);
            });
    }, []);

    return (
        <div>
            <h1>Faculty Management</h1>
            <ul>
                {faculties.map(faculty => (
                    <li key={faculty.id}>{faculty.faculty_name} ({faculty.faculty_subject})</li>
                ))}
            </ul>
        </div>
    );
};

export default FacultyManagement;

import React, { useState } from "react";
import "./externalfac.css";

const ExternalFacultyForm = () => {
  const [formData, setFormData] = useState({
    faculty_name: "",
    faculty_subject: "",
    student_count: "",
    total_fees: "",
    payable_fees: "",
    paid_amount: "",
    remaining_amount: "",
  });

  const [facultyData, setFacultyData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate remaining amount
    const updatedFormData = {
      ...formData,
      remaining_amount: formData.total_fees - formData.paid_amount,
    };

    setFacultyData([...facultyData, updatedFormData]);
    setFormData({
      faculty_name: "",
      faculty_subject: "",
      student_count: "",
      total_fees: "",
      payable_fees: "",
      paid_amount: "",
      remaining_amount: "",
    });
  };

  return (
    <div className="faculty-form-container">
      <h2>External Faculty Form</h2>
      <form className="faculty-form" onSubmit={handleSubmit}>
        <label>
          Faculty Name:
          <input
            type="text"
            name="faculty_name"
            value={formData.faculty_name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Faculty Subject:
          <input
            type="text"
            name="faculty_subject"
            value={formData.faculty_subject}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Student Count:
          <input
            type="number"
            name="student_count"
            value={formData.student_count}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Total Fees:
          <input
            type="number"
            name="total_fees"
            value={formData.total_fees}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Payable Fees:
          <input
            type="number"
            name="payable_fees"
            value={formData.payable_fees}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Paid Amount:
          <input
            type="number"
            name="paid_amount"
            value={formData.paid_amount}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add Faculty</button>
        </form>

<h3>Faculty Data</h3>
{facultyData.length > 0 && (
  <table className="faculty-table">
    <thead>
      <tr>
        <th>Faculty Name</th>
        <th>Faculty Subject</th>
        <th>Student Count</th>
        <th>Total Fees</th>
        <th>Payable Fees</th>
        <th>Paid Amount</th>
        <th>Remaining Amount</th>
      </tr>
    </thead>
    <tbody>
      {facultyData.map((data, index) => (
        <tr key={index}>
          <td>{data.faculty_name}</td>
          <td>{data.faculty_subject}</td>
          <td>{data.student_count}</td>
          <td>{data.total_fees}</td>
          <td>{data.payable_fees}</td>
          <td>{data.paid_amount}</td>
          <td>{data.remaining_amount}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}
</div>
);
};

export default ExternalFacultyForm;
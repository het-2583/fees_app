import React, { useState } from "react";
import "./studentinfo.css";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone_no: "",
    email: "",
    school_name: "",
    board: "",
    standard_id: "",
    subject_id: "",
    medium: "",
    discount: 0.0,
    total_fees: "",
    shift: "Morning",
    reference: "",
    paid_amount: 0.0,
    remaining_amount: "",
    fees_date: "",
    due_date: "",
    payment_mode: "Cash",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send formData to an API or store it here
    console.log("Student Data Submitted:", formData);
  };

  return (
    <div className="form-container">
      <h2>Student Information Form</h2>
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone_no">Phone Number:</label>
          <input
            type="text"
            id="phone_no"
            name="phone_no"
            value={formData.phone_no}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="school_name">School Name:</label>
          <input
            type="text"
            id="school_name"
            name="school_name"
            value={formData.school_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="board">Board:</label>
          <input
            type="text"
            id="board"
            name="board"
            value={formData.board}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="standard_id">Standard ID:</label>
          <input
            type="number"
            id="standard_id"
            name="standard_id"
            value={formData.standard_id}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject_id">Subject ID:</label>
          <input
            type="number"
            id="subject_id"
            name="subject_id"
            value={formData.subject_id}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="medium">Medium:</label>
          <input
            type="text"
            id="medium"
            name="medium"
            value={formData.medium}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="discount">Discount:</label>
          <input
            type="number"
            id="discount"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="total_fees">Total Fees:</label>
          <input
            type="number"
            id="total_fees"
            name="total_fees"
            value={formData.total_fees}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="shift">Shift:</label>
          <select
            id="shift"
            name="shift"
            value={formData.shift}
            onChange={handleChange}
          >
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="reference">Reference:</label>
          <input
            type="text"
            id="reference"
            name="reference"
            value={formData.reference}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="paid_amount">Paid Amount:</label>
          <input
            type="number"
            id="paid_amount"
            name="paid_amount"
            value={formData.paid_amount}
            onChange={handleChange}
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="remaining_amount">Remaining Amount:</label>
          <input
            type="number"
            id="remaining_amount"
            name="remaining_amount"
            value={formData.remaining_amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fees_date">Fees Date:</label>
          <input
            type="date"
            id="fees_date"
            name="fees_date"
            value={formData.fees_date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="due_date">Due Date:</label>
          <input
            type="date"
            id="due_date"
            name="due_date"
            value={formData.due_date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="payment_mode">Payment Mode:</label>
          <select
            id="payment_mode"
            name="payment_mode"
            value={formData.payment_mode}
            onChange={handleChange}
          >
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
            <option value="Card">Card</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;

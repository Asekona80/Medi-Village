import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
  const [patientName, setPatientName] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const appointmentData = { patientName, doctorName, date, time }; 

    try {
      const response = await axios.post('http://localhost:3001/appointment', appointmentData);
      if (response.data.message === 'Appointment booked successfully') {
        alert('Appointment booked successfully!');
        navigate('/appointments'); 
      }
    } catch (err) {
      console.error('Error booking appointment:', err);
      alert('Failed to book appointment');
    }
  };

  // Inline styling
  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  };

  const buttonStyle = {
    backgroundColor: '#AEE9E6',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#87CDDB', 
  };

  return (
    <div className="container" style={{ marginTop: '50px' }}>
      <h2 style={{ textAlign: 'center' }}>Book an Appointment</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Patient Name</label>
          <input
            type="text"
            className="form-control"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Doctor Name</label>
          <input
            type="text"
            className="form-control"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Time</label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px' }}
          />
        </div>
        <button
          type="submit"
          className="btn"
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4589ff'}
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default Appointment;

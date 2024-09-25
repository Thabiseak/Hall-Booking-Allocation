import React, { useState } from 'react';
import './Form.css';

export default function Form() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    
    bookingDate: '',
    startTime: '',
    meetingDuration: '',
    endTime: '',
    additionalDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to handle form submission,
    // e.g., sending the data to a server or processing it in some way.
    console.log('Form data submitted:', formData);
    // Reset the form fields after submission
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      bookingDate: '',
      startTime: '',
      meetingDuration: '',
      endTime: '',
      additionalDetails: '',
    });
  };

  const calculateEndTime = () => {
    const { startTime, meetingDuration } = formData;
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const [durationHours, durationMinutes] = meetingDuration
      .split(':')
      .map(Number);

    const endHours = startHours + durationHours;
    const endMinutes = startMinutes + durationMinutes;

    if (endMinutes >= 60) {
      endMinutes -= 60;
      endHours += 1;
    }

    const formattedEndHours = endHours.toString().padStart(2, '0');
    const formattedEndMinutes = endMinutes.toString().padStart(2, '0');

    return `${formattedEndHours}:${formattedEndMinutes}`;
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      endTime: calculateEndTime(),
    });
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Please Fill In This Form To Book Halls</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
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
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookingDate">Booking Date:</label>
          <input
            type="date"
            id="bookingDate"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startTime">Starting Time:</label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleTimeChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="meetingDuration">Meeting Duration:</label>
          <input
            type="time"
            id="meetingDuration"
            name="meetingDuration"
            value={formData.meetingDuration}
            onChange={handleTimeChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endTime">Ending Time:</label>
          <input
            type="text"
            id="endTime"
            name="endTime"
            value={formData.endTime}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="additionalDetails">Additional Details:</label>
          <textarea
            id="additionalDetails"
            name="additionalDetails"
            value={formData.additionalDetails}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}

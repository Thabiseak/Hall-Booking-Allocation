import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <form className="contact-form">
        <input
          className="contact-input"
          type="text"
          placeholder="Name"
        />
        <input
          className="contact-input"
          type="email"
          placeholder="Email"
        />
        <textarea
          className="contact-textarea"
          rows="5"
          placeholder="Message"
        ></textarea>
        <button className="contact-button">Send Message</button>
      </form>
    </div>
  );
}

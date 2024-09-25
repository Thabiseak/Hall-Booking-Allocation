import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Welcome to ITUM</h1>
      <p className="home-content">
        Welcome to our online platform dedicated to simplifying your event planning process. Whether you're organizing a corporate conference, competitions, graduations, or any special gathering, we've got you covered. Our diverse selection of well-appointed halls offers the perfect backdrop for your unique event, and our streamlined booking system ensures that securing the ideal venue is a breeze.
      </p>
      <p className="home-content">
        Our mission is to make your event planning journey as smooth as possible. With our intuitive interface, you can effortlessly explore our range of halls, each with its own distinct charm and amenities. Discover venues suitable for small, intimate gatherings, or spacious halls for grand celebrations. Check availability, view photos, and access all the information you need to make an informed decision.
      </p>
      <p className="home-content">
        Your vision is our priority. Whether you're envisioning an elegant ballroom, a cozy and rustic setting, or a contemporary space with state-of-the-art technology, our halls can accommodate your desires. Our dedicated team is here to assist you every step of the way, ensuring that your event is a resounding success.
      </p>
      <Link to="/hall-choosing" className="home-button-link">
        <button className="home-button">Book Halls</button>
      </Link>
    </div>
  );
}

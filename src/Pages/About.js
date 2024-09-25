import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="scrolling-content">
        <p className = "about-text">
        Welcome to our online platform dedicated to simplifying your event planning process. 
        Whether you're organizing a corporate conference, competitions, graduations, or any special gathering, we've got you covered. 
        Our diverse selection of well-appointed halls offers the perfect backdrop for your unique event, and our streamlined booking system ensures that securing the ideal venue is a breeze.

<br/><br/><br/>
        Our mission is to make your event planning journey as smooth as possible. 
        With our intuitive interface, you can effortlessly explore our range of halls, each with its own distinct charm and amenities.
        Discover venues suitable for small, intimate gatherings, or spacious halls for grand celebrations. Check availability, view photos, and access all the information you need to make an informed decision.

<br/><br/><br/>

        Your vision is our priority. 
        Whether you're envisioning an elegant ballroom, a cozy and rustic setting, or a contemporary space with state-of-the-art technology, our halls can accommodate your desires. 
        Our dedicated team is here to assist you every step of the way, ensuring that your event is a resounding success.

        </p>
        {/* Add more paragraphs as needed */}
      </div>
    </div>
  );
}

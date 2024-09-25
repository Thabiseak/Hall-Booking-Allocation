import React from 'react';
import { Link } from 'react-router-dom';
import './Hallcard.css';

export default function Hallcard2({ hallName }) {
  // You can retrieve a list of available halls from your data source

  const hall = [
    { id: 1, name: 'Hall 453', venue: 'Admission Block, 3rd Floor', seating: 70},
    { id: 2, name: 'Placement Hall / Sir CV raman Hall', venue: 'Admission Block, 2nd Floor', seating: 250 },
    { id: 3, name: 'CDIO Hall', venue: 'Admission Block, 2nd Floor', seating: 250},
    { id: 4, name: 'Yoga Hall', venue: 'Admission Block, 3rd Floor', seating: 250 },
    { id: 5, name: 'Board Room', venue: 'Admission Block, Ground Floor', seating: 15},
    { id: 5, name: 'IQAC Board Room', venue: 'Academic Block, Ground Floor', seating: 25}
    
    // Add more halls as needed
  ];

  return (
    <>
    <h1 className='hall-heading'>  Available labs  </h1>
    <div className="hall-list">
        
      {hall.map((hall) => (
        <div key={hall.id} className="hall-card">
          <h2>{hall.name}</h2>
          <h4>Venue: {hall.venue}</h4>
          <h5>Seating Capacity: {hall.seating}</h5>
          <Link to={`/form`}>
            <button>Book Now</button>
          </Link>
          
        </div>
      ))}
    </div>
    </>
  );
}

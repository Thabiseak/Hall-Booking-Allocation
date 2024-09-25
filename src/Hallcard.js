import React from 'react';
import { Link } from 'react-router-dom';
import './Hallcard.css';

export default function Hallcard({ hallName }) {
  // You can retrieve a list of available halls from your data source

  const hall = [
    { id: 1, name: 'Hall 213', venue: 'Academic Block, 1st Floor', seating: 70  },
    { id: 2, name: 'Hall 210', venue: 'Academic Block, 1st Floor', seating: 70   },
    { id: 3, name: 'Hall 310/A1', venue: 'Academic Block, 2nd Floor', seating: 70   },
    { id: 4, name: 'Hall 310/B1', venue: 'Academic Block, 2nd Floor', seating: 70   },
    { id: 5, name: 'Hall 410/A1', venue: 'Academic Block, 3rd Floor', seating: 70  },
    { id: 6, name: 'Hall 410/B1', venue: 'Academic Block, 3rd Floor', seating: 70  },
    { id: 7, name: 'Hall 510/A1', venue: 'Academic Block, 4th Floor', seating: 70  },
    { id: 8, name: 'Hall 510/B1', venue: 'Academic Block, 4th Floor', seating: 70  },
    { id: 9, name: 'Hall 610', venue: 'Academic Block, 5th Floor', seating: 70  },
    { id: 10, name: 'Hall 612', venue: 'Academic Block, 5th Floor', seating: 70  },
    { id: 11, name: 'Hall 522', venue: 'Lab Block, 4th Floor', seating: 70  },
    { id: 12, name: 'Hall 523', venue: 'Lab Block, 4th Floor', seating: 70  },
    { id: 13, name: 'Hall 524', venue: 'Lab Block, 4th Floor', seating: 70  },
    { id: 14, name: 'Hall 525', venue: 'Lab Block, 4th Floor', seating: 70  },
    { id: 15, name: 'Hall 526', venue: 'Lab Block, 4th Floor', seating: 70  },
    { id: 16, name: 'Hall 527', venue: 'Lab Block, 4th Floor', seating: 70  },
    { id: 17, name: 'Hall 417 A', venue: 'Lab Block, 3rd Floor', seating: 70  },
    { id: 18, name: 'Hall 417 B', venue: 'Lab Block, 3rd Floor', seating: 70  },
    { id: 19, name: 'Hall 217 D', venue: 'Lab Block, 1st Floor', seating: 70  },
    { id: 20, name: 'Hall 217 D1', venue: 'Lab Block, 1st Floor', seating: 70  },
    { id: 21, name: 'Hall 217 B2', venue: 'Lab Block, 1st Floor', seating: 70  },
    { id: 22, name: 'Hall 619 C', venue: 'Lab Block, 5th Floor', seating: 70  },
    { id: 23, name: 'Hall 619 D', venue: 'Lab Block, 5th Floor', seating: 70  },
    { id: 24, name: 'Hall 619 E', venue: 'Lab Block, 5th Floor', seating: 70  },

    // Add more halls as needed
  ];

  return (
    <>
    <h1 className='hall-heading'>  Available Halls  </h1>
    <div className="hall-list">
        
      {hall.map((hall) => (
        <div key={hall.id} className="hall-card">
          <h2>{hall.name}</h2>
          <h4>venue: {hall.venue}</h4>
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

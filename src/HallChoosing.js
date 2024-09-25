import React from 'react'
import "./HallChoosing.css";
import { Link } from 'react-router-dom';

export default function HallChoosing() {
  return (
    <div className = "hall-choosing-list">
        <div className = "hall-choosing-card">
                <h2>Labratory</h2>
                <Link to = "/hall-list1"><button>Book Now</button></Link>
        </div>
        <div className = "hall-choosing-card">
                <h2>Hall</h2>
                <Link to = "/hall-list2"><button>Baack Now</button></Link>
        </div>
    </div>
  )
}

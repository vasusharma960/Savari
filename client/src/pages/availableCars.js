import React from 'react';
import { Link } from 'react-router-dom';
import './availableCars.css';

export default function AvailableCars({ car }) {
    return (
        <div className='card'>
            <img src={car.image} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">Rent {car.rent} per hour</p>
                <Link to={`/bookcar/${car._id}`}><button className="btn btn-outline-dark book-btn">Book Now</button></Link>
            </div>
        </div>
    );
}
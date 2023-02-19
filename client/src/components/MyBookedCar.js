import React from "react";
import './myBookedCar.css';

export default function MyBookedCar({ car }) {
    return (
        <div className="card mb-3 book-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={car.image} className="img-fluid rounded-start car-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{car.name}</h3>
                  <p className="card-text">Booking ID: { car.booking_id }</p>
                  <p className="card-text">Fuel Type: {car.fuel}</p>
                  <p className="card-text">Booked From: {car.from.split('T')[0]} {car.from.split('T')[1]}</p>
                  <p className="card-text">Booked To: { car.to.split('T')[0] } { car.to.split('T')[1] }</p>
                </div>
              </div>
            </div>
          </div>
    );
}
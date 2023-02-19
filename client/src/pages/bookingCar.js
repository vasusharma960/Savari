import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import RecentSlots from '../components/RecentSlots';
import { bookCar } from '../store/book-actions';
import './bookingCars.css';

export default function BookingCar() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.id);
  const [total, setTotal] = useState(0);
  const [dateRange, setDateRange] = React.useState({
    from: '',
    to: ''
  });
  const carid = window.location.pathname.substring(9);

  const cars = useSelector((state) => state.cars.cars);
  const carDetails = cars.find((car) => car._id === carid);
  const date = new Date();
  const minTime = `${date.toISOString().slice(0, 10)}T${date.getHours()}:${date.getMinutes()}`;

  function handleChange(event){
    const { name, value } = event.target;

    if (name === 'to' && value) {
      const from = Date.parse(dateRange.from);
      const to = Date.parse(value);

      if (to - from > 600000) {
        console.log(to - from);
        const tot = (carDetails.rent / 60) * ((to - from) / (1000 * 60));
        setTotal((Math.round(tot * 100) / 100).toFixed(2));
      } else {
        setTotal(0);
      }
    }

    setDateRange((prevstate) => {
        return {
            ...prevstate,
            [name]: value
        }
    });
  }

  function handleBook(event){
    event.preventDefault();
    
    console.log(total);
    dispatch(bookCar({
      car_id: carDetails._id,
      user_id: id,
      from: dateRange.from,
      to: dateRange.to
    }));
  }
  return (
      <React.Fragment>
          <Header />
          <div className="card mb-3 book-card">
            <div className="row g-0">
              <div className="col-md-7">
                <img src={carDetails.image} className="img-fluid rounded-start car-img" alt="..." />
              </div>
              <div className="col-md-5">
                <div className="card-body">
                  <h2 className="card-title">{ carDetails.name }</h2>
                  <p className="card-text">Fuel Type: { carDetails.fuel }</p>
                  <p className="card-text"><small className="text-muted">Rent: {carDetails.rent} per hour</small></p>
                  <h5>Select Your Booking Slot</h5>
                  <form>
                    <label className='fromDate'>From:</label>
                    <input
                      onChange={handleChange}
                      className='date'
                      type="datetime-local"
                      name="from"
                      min={minTime}
                      value={dateRange.from}
                      />
                  </form>
                  <form className='toDate'>
                    <label>To:</label>
                    <input
                      onChange={handleChange}
                      className='date'
                      type="datetime-local"
                      name="to"
                      min={minTime}
                      value={dateRange.to}
                      />
                  </form>
              <h5>Total Cost: { total }</h5>
              <button onClick={ handleBook } type="button" className="btn btn-outline-dark">Book Now</button>
                </div>
              </div>
            </div>
          </div>
      
          <div className="card book-card">
            <h5 className="card-header">Recent Booked Slots</h5>
            <div className="card-body">
              <RecentSlots key={ carid} car_id={ carid } />
            </div>
          </div>
      </React.Fragment>
  );
}
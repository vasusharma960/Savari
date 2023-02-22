import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import RecentSlots from '../components/RecentSlots';
import { bookCar } from '../store/book-actions';
import './bookingCars.css';

export default function BookingCar() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.id);
  const [disabled, setDisabled] = useState(false);
  const [total, setTotal] = useState(0);
  const [dateRange, setDateRange] = React.useState({
    from: '',
    to: ''
  });
  const carid = window.location.pathname.substring(9);

  const cars = useSelector((state) => state.cars.cars);
  const carDetails = cars.find((car) => car._id === carid);
  const date = new Date();
  const mins = (date.getMinutes() > 9) ? date.getMinutes() : `0${date.getMinutes()}`; 
  const minTime = `${date.toISOString().slice(0, 10)}T${date.getHours()}:${mins}`;

  function handleChange(event){
    const { name, value } = event.target;
    setDisabled(false);

    setDateRange((prevstate) => {
      return {
        ...prevstate,
        [name]: value
        }
    });    
  }


  useEffect(() => {
    if ((dateRange.from.length > 0 && dateRange.to.length > 0)) {
      const from = Date.parse(dateRange.from);
      const to = Date.parse(dateRange.to);

      if (to - from > 3600000) {
        console.log(`Calculate ${dateRange.from}  ${dateRange.to}`)
        let tot = (carDetails.rent / 60) * ((to - from) / (1000 * 60));
        setTotal((Math.round(tot * 100) / 100).toFixed(2));
        console.log(`Calculate ${total}`)
      } else {
        setDisabled(true);
        setTotal(0);
        toast.error('Please Select Appropriate Dates');
      }
    }
  },[dateRange])

  function handleBook(event){
    event.preventDefault();
    if (dateRange.from.length === 0 || dateRange.to.length === 0) {
      console.log(dateRange)
      return toast.error('Please Select Appropriate Dates');
    }
    
    const from = Date.parse(dateRange.from);
    const to = Date.parse(dateRange.to);

    if ((to - from) >= 432000000) {
      setDisabled(true);
        return toast.error("You Cannot Book Car For More Than 5 Days");
    }
    
    setDisabled(true);
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
                      className='date'
                      type="datetime-local"
                      name="from"
                      min={minTime}
                      value={dateRange.from}
                      onChange={handleChange}
                      />
                  </form>
                  <form className='toDate'>
                    <label>To:</label>
                    <input
                      className='date'
                      type="datetime-local"
                      name="to"
                      min={minTime}
                      value={dateRange.to}
                      onChange={handleChange}
                      />
                  </form>
              <h5>Total Cost: { total }</h5>
              <button onClick={handleBook} type="button" className="btn btn-outline-dark" disabled={ disabled}>Book Now</button>
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
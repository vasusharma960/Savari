import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCarData } from '../store/car-actions';
import { carActions } from '../store/cars-slice';
import './filter.css';

export default function Filter() {
    const date = new Date();
    const mins = (date.getMinutes() > 9) ? date.getMinutes() : `0${date.getMinutes()}`; 
    const minTime = `${date.toISOString().slice(0, 10)}T${date.getHours()}:${mins}`;
    const dispatch = useDispatch();
    const [dateRange, setDateRange] = React.useState({
        from: '',
        to: ''
    });

    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/bookings/`).then(res => setBookings(res.data || []));
    }, []);
    
    function handleChange(event){
        const { name, value } = event.target;
    
        setDateRange((prevstate) => {
            return {
                ...prevstate,
                [name]: value
            }
        });
    }
    
    function handleFilter(e) {
        e.preventDefault();

        const from = Date.parse(dateRange.from);
        const to = Date.parse(dateRange.to);

        if (!from || !to || (to < from)) {
            return alert('Select Appropriate Date Time To Filter');
        }

        if ((to - from) >= 432000000) {
            return alert("You Cannot Book Car For More Than 5 Days");
        }

        //dispatch(getCarData());
        dispatch(carActions.filterCars({ dateRange, bookings }));
    }
    return (
        <React.Fragment>
            <h3 className='filter-heading'>Filter Cars Based On Availability</h3>
            <form className='toDate'>
                <label className='filter-heading' >From:</label>
                <input onChange={handleChange} className='date' type="datetime-local" name="from" value={dateRange.from} min={ minTime } />

                <label className='filter-heading' >To:</label>
                <input onChange={ handleChange} className='date' type="datetime-local" name="to" value={ dateRange.to} min={minTime}/>

                <button onClick={ handleFilter} type="button" className="btn btn-outline-primary">Filter</button>
            </form>
        </React.Fragment>
    );
}
import React from 'react';
import { useDispatch } from 'react-redux';
import { carActions } from '../store/cars-slice';
import './filter.css';

export default function Filter() {
    const dispatch = useDispatch();
    const [dateRange, setDateRange] = React.useState({
        from: '',
        to: ''
    });
    
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
        dispatch(carActions.filterCars(dateRange));
    }
    return (
        <React.Fragment>
            <h3 className='filter-heading'>Filter Cars Based On Availability</h3>
            <form className='toDate'>
                <label className='filter-heading' >From:</label>
                <input onChange={handleChange} className='date' type="datetime-local" name="from" value={ dateRange.from} />

                <label className='filter-heading' >To:</label>
                <input onChange={ handleChange} className='date' type="datetime-local" name="to" value={ dateRange.to} />

                <button onClick={ handleFilter} type="button" className="btn btn-outline-primary">Filter</button>
            </form>
        </React.Fragment>
    );
}
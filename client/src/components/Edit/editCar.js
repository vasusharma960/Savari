import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import YourCars from './yourCars';
import { getCarData } from '../../store/car-actions';

export default function EditCar() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarData());
    },[dispatch]);
    let cars = useSelector((state) => state.cars.cars);
    const user_id = sessionStorage.getItem('id');
    cars = cars.filter((car) => car.owner_id === user_id);
    return (
        <React.Fragment>
            <Header />
            <Link to='/addcar'><button type="button" class="btn btn-outline-primary">Add New Car</button></Link>
            <div className='content d-flex'>
                {(cars.length > 0) ? cars.map((car, index) => {
                        return <YourCars key={index} car={car}/>
                }) : <h1 style={{ color: 'white', marginLeft:'34%'}}>You Have Not Added Any Cars</h1>}
            </div>   
        </React.Fragment>
    );
}
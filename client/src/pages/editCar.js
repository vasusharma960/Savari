import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { carActions } from '../store/cars-slice';
import YourCars from '../components/yourCars';

export default function EditCar() {
    const user_id = sessionStorage.getItem('id');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.editFilter(user_id));
    }, []);

    const cars = useSelector((state) => state.cars.cars);
    return (
        <React.Fragment>
            <Header />
            <div className="content d-flex">
                {cars.map((car, index) => {
                    return <YourCars key={index} car={car}/>
                })}
            </div>
            
        </React.Fragment>
    );
}
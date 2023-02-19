import React from "react";
import { useSelector } from 'react-redux';
import AvailableCars from '../pages/availableCars';

export default function Cars() {
    const cars = useSelector((state) => state.cars.cars);
    return (
        <div className="content d-flex">
            {cars.map((car) => {
                return <AvailableCars key={car._id} car={car}/>
            })}
        </div>
    );
}
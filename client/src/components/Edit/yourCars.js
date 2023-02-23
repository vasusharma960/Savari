import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCar } from "../../store/car-actions";

export default function YourCars({ car }) {
    const dispatch = useDispatch();
    function handleDelete(e) {
        e.preventDefault();

        dispatch(deleteCar(car));
    }
    return (
        <div className='card'>
            <img src={car.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
                <p className="card-text">Rent {car.rent} per hour</p>
                <button onClick={handleDelete} className="btn btn-outline-danger book-btn">Delete</button>
                <Link to={`/editcar/${car._id}`}><button className="btn btn-outline-dark book-btn">Edit Details</button></Link>
            </div>
        </div>
    );
}
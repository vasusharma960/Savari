import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { editCar } from "../store/car-actions";

export default function ChangeCar() {
    const dispatch = useDispatch();
    const carid = window.location.pathname.substring(9);
    const cars = useSelector((state) => state.cars.cars);
    const [carDetails, setCarDetails] = useState({
        _id: '',
        name: '',
        image: '',
        rent: '',
        owner_id: ''
    });

    function handleChange(event){
        const {name, value} = event.target;

        setCarDetails((prevstate) => {
            return {
                ...prevstate,
                [name]: value
            }
        });
    }

    function handleAdd(e) {
        e.preventDefault();

        dispatch(editCar(carDetails))
    }

    useEffect(() => {
        setCarDetails(cars.find((car) => car._id === carid));
    }, [setCarDetails])

    return (
        <React.Fragment>
            <Header />
            <div className="login-box">
            <h2>Edit Your Car</h2>
            <form>
                <div className="user-box">
                        <input onChange={handleChange} name='name' type="text" value={ carDetails.name} required={true} />
                    <label>Car Name</label>
                </div>
                <div className="user-box">
                    <input onChange={handleChange} name='image' type="text" value={ carDetails.image} required={true} />
                    <label>Image URL</label>
                </div>
                <div className="user-box">
                    <input onChange={handleChange} name='fuel' type="text" value={ carDetails.fuel} required={true} />
                    <label>Fuel Type</label>
                </div>
                <div className="user-box">
                    <input onChange={handleChange} name='rent' type="number" value={ carDetails.rent} required={true} />
                    <label>Rent per hour</label>
                </div>
                <button onClick={handleAdd}>Edit Details</button>
            </form>
        </div>
        </React.Fragment>
    );
}
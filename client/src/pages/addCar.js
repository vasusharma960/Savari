import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import { addCar } from "../store/car-actions";

export default function AddCar() {
    const [buttonDisable, setDisable] = useState(false);
    const dispatch = useDispatch();
    const [newCar, setNewCar] = React.useState({
        name: '',
        image: '',
        fuel: '',
        rent: 0,
        owner_id: sessionStorage.getItem('id')
    });

    function handleChange(event){
        const {name, value} = event.target;

        setNewCar((prevstate) => {
            return {
                ...prevstate,
                [name]: value
            }
        });
    }

    function handleAdd(e) {
        e.preventDefault();

        setDisable(true);
        dispatch(addCar(newCar));
    }
    return (
        <React.Fragment>
            <Header />
            <div className="login-box">
            <h2>Add Your Car</h2>
            <form>
                <div className="user-box">
                    <input onChange={handleChange} name='name' type="text" required={true} />
                    <label>Car Name</label>
                </div>
                <div className="user-box">
                    <input onChange={handleChange} name='image' type="text" required={true} />
                    <label>Image URL</label>
                </div>
                <div className="user-box">
                    <input onChange={handleChange} name='fuel' type="text" required={true} />
                    <label>Fuel Type</label>
                </div>
                <div className="user-box">
                    <input onChange={handleChange} name='rent' type="number" required={true} />
                    <label>Rent per hour</label>
                </div>
                <button onClick={handleAdd} disabled={buttonDisable}>Submit</button>
            </form>
        </div>
        </React.Fragment>
    );
}
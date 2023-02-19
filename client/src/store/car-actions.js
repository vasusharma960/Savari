import axios from 'axios';
import { carActions } from "./cars-slice";

export const getCarData = () => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.get('http://localhost:8080/api/v1/cars');
            return res.data;
        }

        try{
            const carsData = await sendRequest();
            dispatch(carActions.replaceData(carsData));
        }catch(err){
            alert("Error occured while getting data from DB");
        }
    }
}

export const addCar = (newCar) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.post('http://localhost:8080/api/v1/cars', newCar);
            return res.data;
        }

        try {
            const data = await sendRequest();
            alert(data);

            window.location.href = '/home';
        } catch (err) {
            alert("An Error Occured");
        }
    }
}

export const editCar = (car) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.patch('http://localhost:8080/api/v1/cars/editCar', car);
            return res.data;
        }

        try {
            const data = await sendRequest();
            alert(data);
            window.location.href = '/home';
        } catch (err) {
            alert("An Error Occured");
        }
    }
}

export const deleteCar = (car) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.delete(`http://localhost:8080/api/v1/cars/editCar/${car._id}`);
            return res.data;
        }

        try {
            const data = await sendRequest();
            alert(data);
            window.location.href = '/home';
        } catch (err) {
            alert("An Error Occured");
        }
    }
}
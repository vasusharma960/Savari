import axios from "axios"

export const bookCar = (car) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.post('http://localhost:8080/api/v1/bookings/bookcar', car);
            return res;
        }

        try {
            const data = await sendRequest();
            window.location.href = '/bookings';
        } catch (err) {
            alert(`${err.response.data}`);
        }
    }
}
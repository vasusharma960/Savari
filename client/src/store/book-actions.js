import axios from "axios"

export const bookCar = (car) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.post('http://localhost:8080/api/v1/bookings/bookcar', car);
            console.log(res);
            return res;
        }

        try {
            console.log(car);
            const data = await sendRequest();
            console.log(data);
            window.location.href = '/bookings';
        } catch (err) {
            alert(`Booking Failed`);
        }
    }
}
import axios from "axios"
import { toast } from "react-hot-toast";

export const bookCar = (car) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.post('http://localhost:8080/api/v1/bookings/bookcar', car);
            return res.data;
        }

        try {
            const data = await sendRequest();
            setTimeout(() => {
                window.location.href = '/bookings';
            }, 1500);
            toast.success(data);
        } catch (err) {
            toast.error(`${err.response.data}`);
        }
    }
}
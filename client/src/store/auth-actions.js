import axios from "axios"
import { authActions } from "./auth-slice";

export const newUser = (user) =>{
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.post('http://localhost:8080/api/v1/users/register', user);
            return res;
        }

        try {
            const data = await sendRequest();
            alert('User Registered Successfully');
            window.location.href = '/';
        } catch (err) {
            const code = err.response.status;
            const errData = err.response.data;
            alert(`${code} ${errData}`);
        }
    }
}

export const getUser = (user) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.post('http://localhost:8080/api/v1/users/login', user);
            return res;
        }

        try {
            const data = await sendRequest();
            
            if (data.status === 200) {
                dispatch(authActions.login({ id: data.data.id, username: user.username }));
                window.location.href = '/home';
            }
        } catch (err) {
            const code = err.response.status;
            const errData = err.response.data;
            alert(`${code} ${errData}`);
        }
    }
}
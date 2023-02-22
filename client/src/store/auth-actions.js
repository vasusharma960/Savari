import axios from "axios"
import { toast } from "react-hot-toast";
import { authActions } from "./auth-slice";

export const newUser = (user) =>{
    return async (dispatch) => {
        const sendRequest = async () => {
            const res = await axios.post('http://localhost:8080/api/v1/users/register', user);
            return res;
        }

        try {
            const data = await sendRequest();
            toast.success('User Registered Successfully');
            setTimeout(() => {
                window.location.href = '/';
            }, 1500);
        } catch (err) {
            const code = err.response.status;
            const errData = err.response.data;
            toast.error(`${code} ${errData}`);
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
                window.location.href = '/dashboard';
            }
        } catch (err) {
            const code = err.response.status;
            const errData = err.response.data;
            toast.error(`${code} ${errData}`);
        }
    }
}
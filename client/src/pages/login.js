import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { getUser } from '../store/auth-actions';
import './login.css';

export default function Login() {
    
    const dispatch = useDispatch();
    const [user, setUser] = React.useState({
        username: '',
        password: ''
    });

    function handleChange(event){
        const {name, value} = event.target;

        setUser((prevstate) => {
            return {
                ...prevstate,
                [name]: value
            }
        });
    }

    function handleLogin(event){
        event.preventDefault();

        if (!user.username || user.username.length === 0 || !user.username.includes('@')) {
            return toast.error('Enter Valid Username');
        } else if (!user.password || user.password.length === 0) {
            return toast.error('Enter Password');
        }

        dispatch(getUser(user));
    }
    return (
        <div className="login-box">
            <h2>Login</h2>
            <form>
                <div className="user-box">
                    <input onChange={handleChange} name='username' value={user.username} type="text" required="" />
                    <label>Username</label>
                </div>
                <div className="user-box">
                    <input onChange={handleChange} name='password' value={user.password} type="password" required="" />
                    <label>Password</label>
                </div>
                <button onClick={handleLogin}>Submit</button><br />
                <a href="/register" className="link-primary">New User? Click Here To Register</a>
            </form>
        </div>
    );
}
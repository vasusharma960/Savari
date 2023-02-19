import React from 'react';
import { useDispatch } from 'react-redux';
import { newUser } from '../store/auth-actions';
import './login.css';

export default function Register(){
    const dispatch = useDispatch();
//    let alertStyle;
//    const style = {
//        alert: {
//            border: 'solid',
//            borderColor: 'red'
//        }
//    }

    const [user, setUser] = React.useState({
        name: '',
        username: '',
        password: '',
        cpassword: ''
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
        dispatch(newUser(user));
    }
    return (
        <div className="login-box">
            <h2>Register</h2>
            <form>
                <div className="user-box">
                    <input onChange={handleChange} name='name' value={user.name} type="text" required="" />
                    <label>Full Name</label>
                </div>
                <div className="user-box">
                    <input onChange={handleChange} name='username' value={user.username} type="text" required="" />
                    <label>E-Mail</label>
                </div>
                <div className="user-box">
                    <input onChange={handleChange} name='password' value={user.password} type="password" required="" />
                    <label>Password</label>
                </div>
                <div className="user-box">
                    <input onChange={handleChange} name='cpassword' value={user.cpassword} type="password" required="" />
                    <label>Confirm Password</label>
                </div>
                <button onClick={handleLogin}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                Submit
                </button><br />
                <a href="/" className="link-primary">Already Registered? Click Here To Login</a>
            </form>
        </div>
    );
}
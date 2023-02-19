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

        if (!user.name || user.name.length === 0) {
            alert('Enter Name');
            return;
        } else if (!user.username.includes('@')) {
            alert('Enter Valid Email');
            return;
        } else if (!user.password || user.password.length < 4) {
            alert('Enter Password Of More Than 4 Characters');
            return;
        } else if (user.password !== user.cpassword) {
            alert('Password Do Not Match');
            return;
        }

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
                <button onClick={handleLogin}>Submit</button><br />
                <a href="/" className="link-primary">Already Registered? Click Here To Login</a>
            </form>
        </div>
    );
}
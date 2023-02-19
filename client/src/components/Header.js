import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth-slice';
import './default.css';

export default function Header() {
    const username = useSelector((state) => state.auth.username);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authActions.setState());
    },[]);

    function handleLogout(e) {
        e.preventDefault();
        dispatch(authActions.logout());
    }
    return (
        <div>
            <div className="d-flex justify-content-around navbar shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <div>
                    <div>
                        <h1>Savaari</h1>
                        <p>Don't Buy Just Rent</p>
                    </div>
                </div>
                <div className='dropdown'>
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{username}</button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href='/home'>Home</a></li>
                        <li><a className="dropdown-item" href='/addcar'>Add Your Car</a></li>
                        <Link to='/editcar' style={{textDecoration: 'none'}}><li><button className="dropdown-item" >Edit Your Car</button></li></Link>
                        <li><a className="dropdown-item" href='/bookings'>My Bookings</a></li>
                        <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
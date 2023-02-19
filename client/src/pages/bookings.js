import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import MyBookedCar from "../components/MyBookedCar";

export default function Bookings() {
    const user_id = sessionStorage.getItem('id');
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:8080/api/v1/bookings', { user_id }).then(res => setBookings(res.data || []));
    }, []);
    return (
        <React.Fragment>
            <Header />
            {(bookings.length > 0) ? bookings.map((booking, index) => {
                return <MyBookedCar key={index} car={ booking } />
            }) : <h1 style={{color: 'white'}}>No Previous Bookings Available</h1>}
        </React.Fragment>
    );
}
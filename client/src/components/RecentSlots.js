import axios from "axios";
import React, { useEffect, useState } from "react";

export default function RecentSlots({ car_id }) {
    const [bookings, setBookings] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/bookings/${car_id}`).then(res => setBookings(res.data || []));
    }, []);
    return (
        <React.Fragment>
            {(bookings.length > 0) ? bookings.map((booking, index) => {
                return <h5 key={ index } className="card-title">From: { booking.from.split('T')[0] } { booking.from.split('T')[1] } - To: { booking.to.split('T')[0] } { booking.to.split('T')[1] }</h5>
            }) : <h5>No Bookings Available</h5>}
        </React.Fragment>
    );
}
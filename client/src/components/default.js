import React from "react";
import { useSelector } from "react-redux";
import './default.css';

export default function Default(props) {
    const username = useSelector((state) => state.auth.username);
    console.log(username);
    return (
        <div>
            <div className="d-flex justify-content-around navbar shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                <div>
                    <div>
                        <h1>Savaari</h1>
                        <p>Don't Buy Just Rent</p>
                    </div>
                </div>
                <button>User {username}</button>
            </div>

            <div className="content d-flex">
                {props.children}
            </div>
        </div>
    );
}
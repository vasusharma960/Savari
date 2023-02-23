import React, { useEffect }from "react";
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import Header from "../Header/Header";
import { getCarData } from '../../store/car-actions';

export default function Dashboard() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarData());
    },[dispatch]);
    return (
        <React.Fragment>
            <Header />
            <div className="content d-flex">
                <div className='card'>
                    <img src="https://zicarandvanhire.co.uk/wp-content/themes/jgvh_responsive/images//book-now-advert.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <Link to='/bookcar'><button href="/book" className="btn btn-outline-dark">Book Car</button></Link>
                    </div>
                </div>
                <div className='card'>
                    <img src="https://i.ytimg.com/vi/ZAUecZN5jqE/maxresdefault.jpg" className="card-img-top" alt="..." style={ {height: '100%'}} />
                    <div className="card-body">
                      <Link to='/editcar'><button className="btn btn-outline-dark">List Car</button></Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
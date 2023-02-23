import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cars from './cars';
import Header from '../Header/Header';
import { getCarData } from '../../store/car-actions';

export default function Bookcar() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarData());
    },[dispatch]);
    const cars = useSelector((state) => state.cars.cars);
    return (
        <React.Fragment>
            <Header />
            <Cars temp={ cars } />
        </React.Fragment>
    );
}
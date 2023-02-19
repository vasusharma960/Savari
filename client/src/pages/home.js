import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cars from '../components/cars';
import Header from '../components/Header';
import Filter from '../components/filter';
import { getCarData } from '../store/car-actions';

export default function Home(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarData());
    },[]);
    return (
        <React.Fragment>
            <Header />
            <Filter />
            <Cars />
        </React.Fragment>
    );
}
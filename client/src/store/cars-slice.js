import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: []
    },
    reducers: {
        replaceData(state, action){
            state.cars = action.payload || [];
        },
        filterCars(state, action) {
            console.log(state.cars.length);
        },
        editFilter(state, action) {
            state.cars = state.cars.filter((car) => car.owner_id === action.payload);
            console.log(state.cars.length);
        }
    }
});

export const carActions = carsSlice.actions;

export default carsSlice;
import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: []
    },
    reducers: {
        replaceData(state, action){
            state.cars = action.payload || [];
        }
    }
});

export const carActions = carsSlice.actions;

export default carsSlice;
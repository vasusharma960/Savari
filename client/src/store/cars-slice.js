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
            const from = Date.parse(action.payload.dateRange.from);
            const to = Date.parse(action.payload.dateRange.to);
            const bookings = action.payload.bookings;

            state.cars = state.cars.filter((car) => {
                for (let i = 0; i < bookings.length; i++) {
                    
                    const bfrom = Date.parse(bookings[i].from);
                    const bto = Date.parse(bookings[i].to);
                    
                    if (bookings[i].car_id === car._id) {
                        if ((from < bfrom && from < bto && to < bfrom && to < bto)
                        || (from > bfrom && from > bto && to > bfrom && to > bto)) {
                            return car;
                        }
                    }
                    
                }
            });

            console.log(state.cars[0]._id);
        },
        editFilter(state, action) {
            state.cars = state.cars.filter((car) => car.owner_id === action.payload);
            console.log(state.cars.length);
        }
    }
});

export const carActions = carsSlice.actions;

export default carsSlice;
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import carsSlice from "./cars-slice";

const store = configureStore({
    reducer: {
        cars: carsSlice.reducer,
        auth: authSlice.reducer
    }
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        id: '',
        username: '',
        isLoggedIn: false
    },
    reducers: {
        setState(state) {
            state.id = sessionStorage.getItem('id');
            state.username = sessionStorage.getItem('username');
        },
        login(state, action) {
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.isLoggedIn = true;
            sessionStorage.setItem('id', action.payload.id);
            sessionStorage.setItem('username', action.payload.username);
        },
        logout(state) {
            state.id = '';
            state.username = '';
            state.isLoggedIn = false;
            sessionStorage.clear();
            window.location.href = '/';
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;
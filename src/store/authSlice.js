import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import ms from 'ms';

const initialState = {
    isLoggedIn: false,
    fName: null,
    lName: null,
    date:null,
};

const COOKIE_EXPIRATION_MINUTES = ms("8h"); 
const authSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.fName = action.payload.fName;
            state.lName = action.payload.lName;
            state.date = action.payload.today;
            // Calculate the expiration time
            const expirationDate = new Date();
            expirationDate.setTime(
                expirationDate.getTime() + COOKIE_EXPIRATION_MINUTES
            );

            Cookies.set("userUniquid", action.payload.uniqueID, {
                expires: expirationDate,
            });
        },

        logoutStatic: (state) => {
            state.isLoggedIn = false;
            state.fName = null;
            state.lName = null;
            state.date = null;
            Cookies.remove('userUniquid');
        },
    },
});

export const { login, logoutStatic } = authSlice.actions;
export default authSlice.reducer;
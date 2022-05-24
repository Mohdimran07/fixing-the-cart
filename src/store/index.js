import {  configureStore } from "@reduxjs/toolkit";
import cartSlice from './Cart'

const store = configureStore({
    reducer: {cart: cartSlice.reducer}
});

export default store;
import { createSlice } from "@reduxjs/toolkit";

const initialCartState= {
    toggle: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState,
    reducers: {
        cartToggle (state){
            state.toggle = !state.toggle;
        }
    }
});

export const cartActions =  cartSlice.actions;

export default cartSlice;
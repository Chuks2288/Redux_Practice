import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../constants";


const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading: true,
}


export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) =>
                item.id !== itemId);
        },
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) =>
                item.id === payload.id);
            // cartItem.amount = cartItem.amount + 1;
            cartItem.amount += 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) =>
                item.id === payload.id);
            // cartItem.amount = cartItem.amount - 1;
            cartItem.amount -= 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            // let price = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            })
            state.amount = amount;
            state.total = total;
        }
    },
})


export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;


export default cartSlice.reducer




//in this case of increase, this is another method on how to it, you dont need to destructure the id under onClick

// increase: (state, action) => {
//     const itemId = action.payload;
//     const cartItem = state.cartItems.find((item) =>
//         item.id === itemId);
//     // cartItem.amount = cartItem.amount + 1;
//     cartItem.amount += 1;
// },



//in this case of decrease, this is another method on how to it,you dont need to destructure the id under onClick

// decrease: (state, action) => {
//     const itemId = action.payload;
//     const cartItem = state.cartItems.find((item) =>
//         item.id === itemId);
//     // cartItem.amount = cartItem.amount + 1;
//     cartItem.amount += 1;
// },
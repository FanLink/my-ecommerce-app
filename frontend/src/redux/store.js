import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./productSlice";
import productDetailsSlice from "./productDetailsSlice";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";
import tokenSlice from "./tokenSlice";

const cartFromStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")): []
const userFromStorage = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")): {}
const INITIAL_CART = {
  cart: {cartItems: cartFromStorage},
  users: {user: userFromStorage}
}
const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    product: productDetailsSlice,
    users: userSlice,
    token: tokenSlice
  },
  preloadedState: INITIAL_CART
})
export default store;
import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./productSlice";
import productDetailsSlice from "./productDetailsSlice";
import cartSlice from "./cartSlice";

const cartFromStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")): []
const INITIAL_CART = {
  cart: {cartItems: cartFromStorage}
}
const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    product: productDetailsSlice
  },
  preloadedState: INITIAL_CART
})
export default store;
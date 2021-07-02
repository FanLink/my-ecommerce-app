import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk("cart/addToCart", async ({id, qty}) => {
  const {
    data
  } = await axios.get(`/api/products/${id}`);
  return {
    product: data._id,
    name: data.name,
    imageUrl: data.imageUrl,
    price: data.price,
    countInStock: data.countInStock,
    qty : qty
  }
})

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: []
  },
  reducers: {
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(x => x.product !== action.payload)
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
    },
    changeQty: (state, action) => {
      const existProduct = state.cartItems.find(x => x.product === action.payload.id);
      state.cartItems[state.cartItems.indexOf(existProduct)].qty = action.payload.qty;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state,action)=>{
      state.loading = true;
    })
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(x => x.product === item.product);
      if (existItem) {
       state.cartItems[state.cartItems.indexOf(existItem)].qty = Number(state.cartItems[state.cartItems.indexOf(existItem)].qty) + Number(item.qty);
      } else {
        state.cartItems.push(item)
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems))
      state.loading = false
    })
  }
})
export const {
  removeFromCart,
  changeQty
} = cartSlice.actions;

export default cartSlice.reducer;
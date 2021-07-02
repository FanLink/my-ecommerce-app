import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import axios from "axios";
export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts",
  async () => {
    try {
      const {data} = await axios.get("/api/products")
      return {
          products: data,
          loading: false
      }
    } catch (error) {
      return {
          error: error.response && error.response.data.message ? error.response.data.message : error.message,
          loading: false
      };
    }
  }
);


const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: "",
    loading: true
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state, action) => {
      state.loading = true;
      state.products = [];
    })
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
      state.loading = action.payload.loading;
    })
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.error = action.payload.error;
      state.loading = action.payload.loading;
    })
  }
})

export default productSlice.reducer
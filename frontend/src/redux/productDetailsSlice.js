import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductById = createAsyncThunk("product/fetchProductById", async (id) => {
  try {
    const {data} = await axios.get(`/api/products/${id}`)
    return {
      loading: false,
      product: data
    }
  } catch (error) {
    return {
      loading: false,
      error: error.response && error.response.data.message ? error.response.data.message : error.message
    }
  }
})

const productDetailsSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    loading: true,
    error: ""
  },
  reducers: {
    resetProduct: (state, action) => {
      state.product = {}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state, action) => {
      state.loading = true});
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.loading = action.payload.loading;
      state.product = action.payload.product;
    })
    builder.addCase(fetchProductById.rejected, (state, action) => {
      state.error = action.payload.error;
      state.loading = action.payload.loading;
    })
  }
})
export const {resetProduct} = productDetailsSlice.actions;
export default productDetailsSlice.reducer
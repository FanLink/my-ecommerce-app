import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import {Client} from "../apis";
export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async(_,{rejectWithValue}) => {
  try {
    const {data} = await Client.getProducts();
    return {
      products : data
    }
  } catch (err) {
      let error = err // cast the error for access
      if (!error.response) {
        throw err
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data)
  }
});
export const searchProducts = createAsyncThunk("products/searchProducts", async(searchTerm,{rejectWithValue}) => {
      try {
        const {data} = await Client.searchProducts(searchTerm)
        return {data}
      } catch (err) {
        let error = err // cast the error for access
        if (!error.response) {
          throw err
        }
        // We got validation errors, let's return those so we can reference in our component and set form errors
        return rejectWithValue(error.response.data)
      }
})

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
      state.loading = false;
    })
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      if(action.payload) state.error = action.payload.errorMessage
      state.error = action.error;
      state.loading = false;
    })
    builder.addCase(searchProducts.pending, (state, action) => {
      state.loading = true;
    })
    builder.addCase(searchProducts.fulfilled, (state, action)=> {
      state.products = action.payload.data;
      state.loading = false
    })
    builder.addCase(searchProducts.rejected, (state,action)=> {
      if(action.payload) state.error = action.payload.errorMessage
      state.error = action.error;
      state.loading = false;
    })
  }
})

export default productSlice.reducer
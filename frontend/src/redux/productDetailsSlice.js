import {
  createAsyncThunk,
  createSlice
} from "@reduxjs/toolkit";
import {
  Client
} from "../apis";

export const fetchProductById = createAsyncThunk("product/fetchProductById", async (id, {
  rejectWithValue
}) => {
  try {
    const {
      data
    } = await Client.getProductById(id)
    return {
      product: data
    }
  } catch (err) {
    let error = err;
    if (!error.response) throw err
    return rejectWithValue(error.response.data)
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
      state.loading = true
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.product = action.payload.product;
      state.loading = false;
    })
    builder.addCase(fetchProductById.rejected, (state, action) => {
      if (action.payload) state.error = action.payload.errorMessage;
      state.error = action.error;
      state.loading = false;
    })
  }
})
export const {
  resetProduct
} = productDetailsSlice.actions;
export default productDetailsSlice.reducer
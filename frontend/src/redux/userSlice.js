import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Client } from "../apis";
export const getUser = createAsyncThunk("users/getUser", async(token, {rejectWithValue}) => {
    try {
      if(!token) return {data: localStorage.getItem("users")? localStorage.setItem("users") : {}}
      const {data} = await Client.getUser(token);
      return {data}
    } catch (error) {
      if(error.response){
        throw error;
      }
      return rejectWithValue(error.response.data)
    }
})
const userSlice = createSlice({
  name: "users",
  initialState: {
    user : {}
  },
  reducers: {
    logOutUser: (state,action) => {
      state.user = {};
      localStorage.setItem("users", JSON.stringify(state.user))
    }
  },
  extraReducers: (builder) => {
      builder.addCase(getUser.fulfilled , (state, action) => {
        state.user = action.payload.data ? action.payload.data : {};
        localStorage.setItem("users", JSON.stringify(state.user))
      })
      builder.addCase(getUser.rejected, (state, action) => {
        if(action.payload) state.error = action.payload.errorMessage
        state.error = action.error;
      })
  }
})

export const {logOutUser} = userSlice.actions;
export default userSlice.reducer;
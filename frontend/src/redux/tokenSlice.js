import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Client } from "../apis";

export const userRegiter = createAsyncThunk("token/userRigister", async(userInfo) => {
      const {data} = await Client.registUser(userInfo);
      return {
        data
      }
}) 
export const userLogin = createAsyncThunk("token/userLogin", async(userInfo) => {
  const {data} = await Client.userLogin(userInfo);
  return {
    data
  }
}) 

const tokenSlice = createSlice({
  name: "token",
  initialState: {

  },
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(userRegiter.fulfilled, (state, action) => {
      state.jwtToken = action.payload.data.token;
    })
    builder.addCase(userLogin.fulfilled, (state, action)=> {
      state.jwtToken = action.payload.data.token;
    })
  }
})
export default tokenSlice.reducer;
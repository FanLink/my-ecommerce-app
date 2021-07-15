import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Client } from "../apis";

export const userRegiter = createAsyncThunk("token/userRigister", async(userInfo) => {
      const {data} = await Client.registUser(userInfo);
      return {
        data
      }
}) 
export const userLogin = createAsyncThunk("token/userLogin", async(userInfo, {rejectWithValue}) => {
  try {
    const {data} = await Client.userLogin(userInfo);
    if (data) 
    return {
      data
    }
  } catch (err) {
    let error = err;
    if(!error.response){
      throw err
    }
    return rejectWithValue(error.response.data)
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
      action.payload ? state.jwtToken = action.payload.data.token : state.jwtToken = "";
    })
    builder.addCase(userLogin.rejected, (state, action)=> {
      if(action.payload) state.error = action.payload.errorMessage
      state.error = action.error  
    })
  }
})
export default tokenSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const createUser = createAsyncThunk("users/createUser", async(user)=> {
  try {
    const {data} = await axios.post("url",user);
    return {
      user : data
    }
  } catch (error) {
    return 
  }
});
// const getUser
const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {

  }
})

export default userSlice.reducer;
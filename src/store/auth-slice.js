import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { 
    token:localStorage.getItem("token"),
    isLoggedIn:false,

 },
  reducers: {
      login(state,action) {
        state.token = action.payload;
        state.isLoggedIn =true;
        localStorage.setItem('token', action.payload);
    },
    logout(state){
      state.token = null;
      state.isLoggedIn =false;
      localStorage.removeItem('token');
    }
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;

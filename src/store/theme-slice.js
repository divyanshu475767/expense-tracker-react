import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { 
    color:'white',
 },
  reducers: {
     toggle(state , action){
        state.color = action.payload;
     },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;

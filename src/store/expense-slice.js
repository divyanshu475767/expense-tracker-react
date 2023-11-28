import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: { 
   expenses:[],
 },
  reducers: {
    addExpense(state , action){
        state.expenses.push(action.payload);
    },

    delete(state , action){
        state.expenses = action.payload;
    },
    setExpenses(state,action){
        state.expenses = action.payload;
    }
  },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;

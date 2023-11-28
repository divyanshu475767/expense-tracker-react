import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expense",
  initialState: { 
   expenses:[],
   totalExpenses:0,
   itemToUpdate:null
 },
  reducers: {
    addExpense(state , action){
        state.expenses.push(action.payload);
        const amount =  parseInt(action.payload.amount);
        state.totalExpenses += amount;
    },

    delete(state , action){
        state.expenses = action.payload;

        

    },
    setExpenses(state,action){
        state.expenses = action.payload;
    },

    updateItem(state,action){
      state.itemToUpdate = action.payload;
    }
  },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;

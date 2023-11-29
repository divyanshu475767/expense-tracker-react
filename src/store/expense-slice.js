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

      const expense = state.expenses.find(item=>
        {
          console.log(item.id);
          console.log(action.payload.id);
         return item.id ===action.payload.id
        });

      if(expense){
            expense.amount = action.payload.amount;
            expense.description = action.payload.description;
            expense.category = action.payload.category;
            console.log(expense.amount);
      }
      else{

      
        state.expenses.push(action.payload);

      }
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

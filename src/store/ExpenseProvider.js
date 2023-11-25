import React, { useState } from "react";
import expenseContext from "./expense-context";

const ExpenseProvider = (props) => {

    const [expenses , setExpenses] = useState([]);

     const addExpense = (item)=>{
          
        setExpenses((prev)=>{
            return [item  , ...prev];
        })
     }


  const contextValue = {
    expenses:expenses,
    addExpense:addExpense,
  
  };

  return (
    <expenseContext.Provider value={contextValue}>
      {props.children}
    </expenseContext.Provider>
  );
};

export default ExpenseProvider;

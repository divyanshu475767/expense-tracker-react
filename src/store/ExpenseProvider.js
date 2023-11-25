import React, { useContext, useState, useEffect } from "react";
import expenseContext from "./expense-context";
import axios from "axios";
import authContext from "./auth-context";

const ExpenseProvider = (props) => {
  const authCtx = useContext(authContext);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/expenses",

      headers: { Authorization: authCtx.token },
    }).then((response) => {
      console.log(response);

      setExpenses(response.data);
    });
  }, [authCtx.token]);

  const addExpense = async (item) => {
    const response = await axios({
      method: "post",
      url: "http://localhost:5000/expenses",
      data: {
        amount: item.amount,
        description: item.description,
        category: item.category,
      },

      headers: { Authorization: authCtx.token },
    });

    const response_item = {
      ...item,
      id: response.data.id,
    };

    setExpenses((prev) => {
      return [response_item, ...prev];
    });
  };

  const deleteHandler = async (id) => {
    await axios({
      method: "delete",
      url: `http://localhost:5000/delete/${id}`,

      headers: { Authorization: authCtx.token },
    });

    const updatedArray = expenses.filter((expense) => expense.id !== id);
    console.log(updatedArray);

    setExpenses(updatedArray);
  };

  const contextValue = {
    expenses: expenses,
    addExpense: addExpense,
    onDelete: deleteHandler,
  };

  return (
    <expenseContext.Provider value={contextValue}>
      {props.children}
    </expenseContext.Provider>
  );
};

export default ExpenseProvider;

import React, { useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import { useSelector, useDispatch } from "react-redux";
import { expenseActions } from "../store/expense-slice";

import axios from "axios";
const ExpenseList = () => {
  const dispatch = useDispatch();

  let expense_list = useSelector((state) => state.expense.expenses);

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/expenses",

      headers: { Authorization: token },
    }).then((response) => {
      dispatch(expenseActions.setExpenses(response.data));
    });
  }, [token, dispatch]);

  if (expense_list.length > 0) {
    var expenses = expense_list.map((item) => {
      return (
        <ExpenseItem
          key={Math.random()}
          id={item.id}
          amount={item.amount}
          description={item.description}
          category={item.category}
        />
      );
    });
  }

  return <div className="expense-list">{expenses}</div>;
};

export default ExpenseList;

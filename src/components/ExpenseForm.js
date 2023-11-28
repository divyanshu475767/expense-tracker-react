import React, { useState} from 'react';

import { Form, Button, Dropdown } from 'react-bootstrap';
import './ExpenseForm.css';
import axios from 'axios';

import { useDispatch , useSelector } from 'react-redux';
import { expenseActions } from '../store/expense-slice';



const ExpenseForm = () => {


  const token = useSelector(state=>state.auth.token);

  const dispatch = useDispatch();

  

  const [moneySpent, setMoneySpent] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');


  const handleMoneyChange = (e) => {
    setMoneySpent(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setCategory(category);
  };

  

  
  const submitHandler =async (e) => {
    e.preventDefault();
    const item = {
        id:Math.random().toString(),
        amount:moneySpent,
        description:description,
        category:category
    };

    const response = await axios({
      method: "post",
      url: "http://localhost:5000/expenses",
      data: {
        amount: item.amount,
        description: item.description,
        category: item.category,
      },

      headers: { Authorization: token},
    });

    const response_item = {
      ...item,
      id: response.data.id,
    };

    dispatch(expenseActions.addExpense(response_item))
    setCategory('');
    setDescription('');
    setMoneySpent('');

  }
  const categories = ['Food', 'Petrol', 'Salary', 'Other']; 

  return (
    <div className="expense-container">
      <h3 className="expense-title">Expense Form</h3>
      <Form className="expense-form">
        <Form.Group controlId="formMoney">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={moneySpent}
            onChange={handleMoneyChange}
          />
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </Form.Group>

        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {category ? category : 'Select category'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {categories.map((cat, index) => (
                <Dropdown.Item key={index} onClick={() => handleCategorySelect(cat)}>
                  {cat}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <div className="submit-button">
          <Button variant="primary" type="submit" onClick={submitHandler}>
            Add Expense
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ExpenseForm;

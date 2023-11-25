import React from 'react';
import { Card } from 'react-bootstrap';
import './ExpenseItem.css';

const ExpenseItem = ({amount , description , category}) => {
    

  return (
    <Card className="expense-item">
      <Card.Body>
        <Card.Title className="expense-category">{category}</Card.Title>
        <Card.Text className="expense-amount">${amount}</Card.Text>
        <Card.Text className="expense-description">{description} </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ExpenseItem;

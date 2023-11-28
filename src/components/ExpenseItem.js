import React  from 'react';
import { Card , Button } from 'react-bootstrap';
import './ExpenseItem.css';

import { useSelector  , useDispatch} from 'react-redux';
import { expenseActions } from '../store/expense-slice';

import axios from 'axios';

const ExpenseItem = ({amount , description , category , id}) => {

    const dispatch = useDispatch();

   const expenses = useSelector(state=>state.expense.expenses);

   const token = useSelector(state=>state.auth.token)

   const updateHandler = ()=>{
    dispatch(expenseActions.updateItem({id,amount,description,category}))
   }

    const deleteHandler = async()=>{

      await axios({
        method: "delete",
        url: `http://localhost:5000/delete/${id}`,
  
        headers: { Authorization: token },
      });
  
      const updatedArray = expenses.filter((expense) => expense.id !== id);
      console.log(updatedArray);

      dispatch(expenseActions.delete(updatedArray));
    }
  return (
    <Card className="expense-item">
      <Card.Body>
        <Card.Title className="expense-category">{description}</Card.Title>
        <Card.Text className="expense-amount">${amount}</Card.Text>
        <Card.Text className="expense-description">{category} </Card.Text>
        <Button  variant="outline-danger" onClick={deleteHandler}>Delete</Button>
        <Button className='bttn' variant="outline-warning" onClick={updateHandler}>Update</Button>
      </Card.Body>

    </Card>
  );
};

export default ExpenseItem;

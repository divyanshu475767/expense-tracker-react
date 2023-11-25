import React , {useContext} from 'react';
import { Card , Button } from 'react-bootstrap';
import './ExpenseItem.css';
import expenseContext from '../store/expense-context';

const ExpenseItem = ({amount , description , category , id}) => {
    const expenseCtx = useContext(expenseContext);

    const deleteHandler = ()=>{
        expenseCtx.onDelete(id);
    }
  return (
    <Card className="expense-item">
      <Card.Body>
        <Card.Title className="expense-category">{description}</Card.Title>
        <Card.Text className="expense-amount">${amount}</Card.Text>
        <Card.Text className="expense-description">{category} </Card.Text>
        <Button  variant="outline-danger" onClick={deleteHandler}>Delete</Button>
        <Button className='bttn' variant="outline-warning">Update</Button>
      </Card.Body>

    </Card>
  );
};

export default ExpenseItem;

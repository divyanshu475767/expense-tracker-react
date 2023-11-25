import React , {useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css'
import expenseContext from '../store/expense-context';
const ExpenseList = () => {

    const expenseCtx = useContext(expenseContext);

    const expenses = expenseCtx.expenses.map(item=>{
        return <ExpenseItem key={Math.random()} id={item.id} amount={item.amount} description={item.description} category={item.category}/>
    })
  return (

    <div className='expense-list'>
      {expenses}
    </div>
  )
}

export default ExpenseList

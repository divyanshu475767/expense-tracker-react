import React, { useState } from 'react';
import Dummy from '../components/Dummy';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';



const Home = () => {

    
  return (
    <>
    <Dummy/>
    <ExpenseForm/> 
    <ExpenseList/>
    </>
  )
}

export default Home

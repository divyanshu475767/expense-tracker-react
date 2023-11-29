import React, { useState, useEffect } from 'react';
import './Dummy.css';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth-slice';
import { themeActions } from '../store/theme-slice';

const Dummy = () => {
  const expenses = useSelector(state => state.expense.expenses);

  const [url, setUrl] = useState('');

  useEffect(() => {
    function makeCsv(rows) {
      return rows.map(r => Object.values(r).join(",")).join("\n");
    }

    const blob = new Blob([makeCsv(expenses)], { type: 'text/csv' });
    const generatedUrl = URL.createObjectURL(blob);
    setUrl(generatedUrl);


  }, [expenses]);

  const [isPremium, setIsPremium] = useState(false);
  const [text, setText] = useState('Activate premium');

  const dispatch = useDispatch();
  const totalExpenses = useSelector(state => state.expense.totalExpenses);
  const currentColor = useSelector(state => state.theme.color);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const premiumHandler = () => {
    setText("premium activated");
    setIsPremium(true);
  };

  const toggleTheme = () => {
    const newColor = currentColor === 'black' ? 'white' : 'black';
    dispatch(themeActions.toggle(newColor));
  };

  return (
    <div className='dummy-div'>
      <h2>Welcome to expense tracker</h2>
      <p className='profile-paragraph'>
        Your profile is incomplete ..
        <NavLink to='/updateProfile' style={{ textDecoration: "none", fontWeight: "bold" }}>
          Complete now
        </NavLink>
      </p>

      {totalExpenses >= 10000 &&
        <Button variant="success" onClick={premiumHandler}>{text}</Button>
      }

      {
        isPremium &&
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      }

      {isPremium &&
      <a href={url} download='expenses.csv'>
        <Button variant='success'>
          Download File
        </Button>
      </a>
}

      <Button variant="danger" onClick={logoutHandler}>Logout</Button>
    </div>
  );
};

export default Dummy;





import React from 'react';
import './Dummy.css';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';

import { authActions } from '../store/auth-slice';
import { useDispatch } from 'react-redux';

const Dummy = () => {


   const dispatch = useDispatch();




  const logoutHandler = ()=>{
    dispatch(authActions.logout());
  }
  return (
    <div className='dummy-div'>
    <h2>
    Welcome to expense tracker
    </h2>
     
      <p className='profile-paragraph'>Your profile is incomplete ..
     <NavLink to='/updateProfile' style={{ textDecoration: "none", fontWeight:"bold"}}>
      Complete now
      </NavLink>
    
      </p>
    <Button variant="danger" onClick={logoutHandler}>Logout</Button>
    </div>
  )
}

export default Dummy

import React from 'react';
import './Dummy.css';
import { NavLink } from "react-router-dom";

const Dummy = () => {
  return (
    <div>
    <h2>
    Welcome to expense tracker
    </h2>
     
      <p className='profile-paragraph'>Your profile is incomplete ..
     <NavLink to='/updateProfile' style={{ textDecoration: "none", fontWeight:"bold"}}>
      Complete now
      </NavLink>
      </p>
    </div>
  )
}

export default Dummy

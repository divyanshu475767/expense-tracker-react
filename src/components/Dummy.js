import React , {useContext} from 'react';
import './Dummy.css';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
import authContext from '../store/auth-context';
import { useNavigate } from 'react-router-dom';

const Dummy = () => {

  const authCtx = useContext(authContext);



  const logoutHandler = ()=>{
        authCtx.logout();
       
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

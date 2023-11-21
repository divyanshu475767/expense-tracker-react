import React, { useState } from "react";
import authContext from "./auth-context";


const AuthProvider = (props) => {

     
  const initialToken = localStorage.getItem('token');
    
  const [token , setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;


  const loginHandler = token =>{
    setToken(token);
    localStorage.setItem('token', token);
  }

  const logoutHandler = ()=>{
    setToken(null);
    localStorage.removeItem('token');

  }
  const contextValue = {
     token: token,
     isLoggedIn: userIsLoggedIn,
     login:loginHandler,
     logout:logoutHandler,

  };

  return (
    <authContext.Provider value={contextValue}>
      {props.children}
    </authContext.Provider>
  );
};

export default AuthProvider;

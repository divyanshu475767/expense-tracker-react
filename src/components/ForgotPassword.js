
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
    const response = await axios({
        method: "post",
        url: "http://localhost:5000/password/forgotPassword",
        data: {
          email: email,
        },
      });

      alert(response.data);
      console.log('Email submitted:', email);
      setSubmitted(true);
    }

    catch(err){
        console.log(err);
    }

   
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4">
        <h2 className="mb-4 text-center">Forgot Password</h2>
        {submitted ? (<>
          <p>Reset password instructions sent to {email}. Check your email. Once changed , please come here and login</p>
           <Button onClick={()=>{
         navigate('/')
           }}>Login</Button>
          </>
          ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;

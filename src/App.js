import Signup from "./components/Signup";
import Login from "./components/Login";
import ProfileUpdate from "./components/UpdateProfile";
import ForgotPassword from "./components/ForgotPassword";
import {Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";



import { useSelector } from "react-redux";


function App() {

  const token = useSelector(state=>state.auth.token)

  const currentColor = useSelector(state=>state.theme.color)
  return (
    <div className={currentColor}>
     <p>learn react</p> 
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />

        {token && <>
          <Route path="/" element={<Home/>} />
          <Route path="/updateProfile" element={<ProfileUpdate/>} />
        </>}

        <Route path="/*" element={<Navigate to="/login" />} />
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;

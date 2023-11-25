import Signup from "./components/Signup";
import Login from "./components/Login";
import ProfileUpdate from "./components/UpdateProfile";
import ForgotPassword from "./components/ForgotPassword";
import {Navigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import authContext from "./store/auth-context";
import { useContext } from "react";
import Home from "./pages/Home";
import ExpenseProvider from "./store/ExpenseProvider";
function App() {
  const authCtx = useContext(authContext);
  return (
    <ExpenseProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />

        {authCtx.isLoggedIn && <>
          <Route path="/" element={<Home/>} />
          <Route path="/updateProfile" element={<ProfileUpdate/>} />
        </>}

        <Route path="/*" element={<Navigate to="/login" />} />
       
      </Routes>
    </Router>
    </ExpenseProvider>
  );
}

export default App;

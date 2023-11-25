import Signup from "./components/Signup";
import Login from "./components/Login";
import Dummy from "./components/Dummy";
import ProfileUpdate from "./components/UpdateProfile";
import ForgotPassword from "./components/ForgotPassword";
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import authContext from "./store/auth-context";
import { useContext } from "react";
function App() {
  const authCtx = useContext(authContext);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />

        {authCtx.isLoggedIn && <>
          <Route path="/" element={<Dummy />} />
          <Route path="/updateProfile" element={<ProfileUpdate/>} />
        </>}

        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;

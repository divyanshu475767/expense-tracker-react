import Signup from "./components/Signup";
import Login from "./components/Login";
import Dummy from "./components/Dummy";
import ProfileUpdate from "./components/UpdateProfile";

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
        {authCtx.isLoggedIn && <Route path="/" element={<Dummy />} />}

        <Route path="/updateProfile" element={<ProfileUpdate/>} />
        
      </Routes>
    </Router>
  );
}

export default App;

import Signup from "./components/Signup";
import Login from "./components/Login";
import Dummy from "./components/Dummy";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
  <Routes>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/' element={<Dummy/>}/>


    </Routes>
    </Router>
  );
}

export default App;

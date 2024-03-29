import logo from './logo.svg';
import './App.css';
import  Login  from "./Components/login/Login";
import Register from "./Components/register/Register";
import Home from "./Components/homepage/home";
import {useState} from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [user,setLoginUser] = useState({})
  
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/" element={user && user._id ? <Home /> : <Login setLoginUser={setLoginUser}/> }></Route>
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        {/* <Route path="/profile/:username" element={<Profile/>}></Route> */}
      </Routes>
      </BrowserRouter>
  );
}

export default App;

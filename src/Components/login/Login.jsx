import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login( {setLoginUser}) {

  const navigate = useNavigate();

  const obj = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(obj);


  //setting input data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };


  //login
  const login = (e) => {
    if(!user.email || !user.password){
      alert("Please enter value")
    }
      axios
      .post("http://localhost:8000/login", user)
      .then((res) => {
        if(!res.data.user){
          alert(res.data.message)
        }
          setLoginUser(res.data.user)
          navigate('/')

      });
    
    
  };


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Dhanam</h3>
          <span className="loginDesc">Learn and share with you friends.</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Email"
              name="email"
              value={user.email}
              className="loginInput"
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              name="password"
              value={user.password}
              className="loginInput"
              onChange={handleChange}
            />
            <button className="loginButton" onClick={login}>
              Login
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button
              className="loginRegisterButton"
              onClick={() => navigate("/register")}
            >
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

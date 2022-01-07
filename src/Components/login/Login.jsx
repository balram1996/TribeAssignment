import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

export default function Login() {
  const obj = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login=(e)=>{
    axios.post("http://localhost:8000/login",user)
    .then(res=>console.log(res))
  }
  return (
    <div className="login">
        {console.log(user)}
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
            <button className="loginButton" onClick={login}>Login</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

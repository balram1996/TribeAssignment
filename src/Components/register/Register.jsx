import React from "react";
import "./Register.css";
import react, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const obj = {
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  };
  const [user, setUser] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerFunction = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      //alert("posted")
      axios.post("http://localhost:8000/register", user).then((res) => {
        console.log(res);
      });
    } else {
      //alert("invalid input")
    }
  };

  return (
    <div className="login">
      {console.log(user)}
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Dhanam</h3>
          <span className="loginDesc">Join the community today..</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type="text"
              name="name"
              value={user.name}
              placeholder="Username"
              className="loginInput"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              value={user.email}
              placeholder="Email"
              className="EmailInput"
              onChange={handleChange}
            />
            <input
              type="text"
              name="password"
              value={user.password}
              placeholder="Password"
              className="loginInput"
              onChange={handleChange}
            />
            <input
              type="text"
              name="reEnterPassword"
              value={user.reEnterPassword}
              placeholder="Enter Password"
              className="Confirm Password"
              className="loginInput"
              onChange={handleChange}
            />
            <button className="loginButton" onClick={registerFunction}>
              Sign Up
            </button>
            <button
              className="loginRegisterButton"
              onClick={() => navigate("/login")}
            >
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

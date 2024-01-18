import React, {useRef} from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const nameRef = useRef(null);
    const passwordRef  = useRef(null);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const username = nameRef.current.value;
    const password = passwordRef.current.value;

    try {
    const response = await axios.post("http://localhost:4000/register", { name: username, password: password });
    console.log("User registered successfully", response);
    // Handle successful registration, e.g., show a success message, redirect, etc.
    } catch (error) {
        alert("User already exists");
    console.error("Error registering user:", error);
    // Handle registration error, e.g., show an error message
    }
    };

  const handleLogin = () => {
    console.log("login button clicked");
    navigate("/");
  };

  return (
    <div id="logincard" className="loginCard">
      <h1>Sign Up</h1>
      <div id="inputs" className="inputs">
        <input
          placeholder="Enter your Username"
          className="nameInput"
          ref={nameRef}
        />
        <input
          placeholder="Enter your Password"
          className="passwordInput"
          ref={passwordRef}
        />
      </div>
      <div className="buttons">
        <button className="sign-up" onClick={handleSignUp}>
          Sign Up
        </button>
        <button className="login" onClick={handleLogin}>
          Login
        </button>
        Already have an account?
      </div>
    </div>
  );
};

export default SignUp;

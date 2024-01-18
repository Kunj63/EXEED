import React from "react";
import "./Login.css";

const Login = () => {
    
    function handleLogin() {
        console.log("Login button clicked");
    }

    return (
        <div id="logincard" className="loginCard">
            <h1>Login</h1>
                <div id="inputs" className="inputs">
                   <input placeholder="Enter your Username" className="nameInput" type="text"/>
                   <input placeholder="Enter your Password" className="passwordInput" type="password" />
        </div>
        <div className="buttons">
        <button className="login" onClick={handleLogin}>Login</button>
        <button className="sign-up">Sign Up</button>


        </div>
    </div>
    )
}

export default Login;
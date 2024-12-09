import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            className="login-input-field"
            type="text"
            placeholder="Enter your username"
          />
          <input
            className="login-input-field"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <div>
            <input
              className="login-showPassword"
              type="checkbox"
              onClick={handleShowPassword}
            />
            <span>Show Password</span>
          </div>
          <button className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

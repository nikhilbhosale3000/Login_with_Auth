import React from "react";
import "./SignUp.css";

const SignUp = () => {
  const handleSignup = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Sign Up</h2>
          <input
            className="signup-input-field"
            type="text"
            placeholder="Enter your username"
          />
          <input
            className="signup-input-field"
            type="password"
            placeholder="Enter you password"
          />
          <input
            className="signup-input-field"
            type="password"
            placeholder="Confirm your password"
          />
          <button className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

import React from "react";
import firelogo from "../Images/fire.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="title">
        <img className="logo" src={firelogo} alt="fire-logo" />
        <h2>FireBaseLogin</h2>
      </div>
      <div className="navbar-buttons">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

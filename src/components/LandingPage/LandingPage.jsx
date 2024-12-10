import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="landing-page">
      <div>
        <h1>This is the landing page.</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default LandingPage;

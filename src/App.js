import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navbar">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

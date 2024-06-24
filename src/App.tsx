import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul className="navbar__list">
            <li>
              <Link to="/" className="nav-tittle">
                <span>Log in</span>
              </Link>
            </li>
            <li className="navbar__list__separate"> </li>
            <li>
              <Link to="/signup" className="nav-tittle">
                <span>Sign up</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

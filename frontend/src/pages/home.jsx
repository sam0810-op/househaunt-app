// src/pages/home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="app-title">🏠 House Haunt</h1>
      <div className="intro-section">
        <h2>Welcome to House Haunt!</h2>
        <p>
          Find and list rental properties with ease.
        </p>

        <div className="how-to-use">
          <h3>🔍 How to Use:</h3>
          <ul>
            <li>
              <strong>New User?</strong> Click <b>Signup</b> and choose your role (Renter or Owner).
            </li>
            <li>
              <strong>Owner:</strong> After login, go to Owner Dashboard and add your property with details like title, address, cost, and contact info. You can also edit or delete listings.
            </li>
            <li>
              <strong>Renter:</strong> After login, you’ll be taken to the Renter Dashboard to view available properties and apply for them.
            </li>
          </ul>
        </div>

        <div className="button-group">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signup")}>Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

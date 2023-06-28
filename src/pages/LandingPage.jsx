import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/landingpage.css';
import LandingImage from '../images/landingpic.svg';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>RendezView</h1>
      <p>Coordinate your plans effortlessly.</p>
      <div className="button-container">
        <Link to="/login">
        <button className="login-button">Login</button>
        </Link>
        <Link to="/signup">
        <button className="signup-button">Sign Up</button>
        </Link>
      </div>
      <img src={LandingImage} width="50%"/>
    </div>
  );
}

export default LandingPage;

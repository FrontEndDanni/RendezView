import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styling/navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <input
          type="checkbox"
          className="checkbox"
          id="nav-toggle"
          checked={isMenuOpen}
          onChange={handleMenuToggle}
        />
        <label className="hamburger" htmlFor="nav-toggle">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </label>
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/profile" className="navbar-link">
            Profile
          </Link>
          <Link to="/contacts" className="navbar-link">
            Contacts
          </Link>
          <Link to="/dashboard" className="navbar-link">
            Dashboard
          </Link>
          <Link to="/login" className="navbar-link">
            Login
          </Link>
          <Link to="/signup" className="navbar-link">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

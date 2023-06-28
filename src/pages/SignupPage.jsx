import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/signuppage.css';

function SignupPage() {
  return (
    <div className="signup-page">
<h1>Level Up Your Planning Game with RendezView</h1>
      <form className="signup-form">
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignupPage;

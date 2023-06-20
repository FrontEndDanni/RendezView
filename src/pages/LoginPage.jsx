import React from 'react';
import '../styling/loginpage.css';

function LoginPage() {
  return (
    <div className="login-page">
      <h1>Welcome back! </h1>
      <form className="login-form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;

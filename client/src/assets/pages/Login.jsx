import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="login-card">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <span className="link">
            <Link to="/regitser">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

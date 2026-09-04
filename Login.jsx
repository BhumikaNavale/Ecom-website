import React from "react";
import Register from "./Register";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">

      <div className="login-box">

        <h1>
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
        />

        <input
          type="password"
          placeholder="Password"
        />

        <button>
          Login
        </button>

        <p>
          Don't have an account?
          <Link to="/register">Register</Link>
        </p>

      </div>

    </div>
  );
};

export default Login;
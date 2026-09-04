import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        🛍️ Terra Pack
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/product">Products</Link>

        <Link to="/categories">Categories</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/cart">🛒 Cart</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

      </div>

    </nav>
  );
};

export default Navbar;
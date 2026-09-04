import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-small">
          Welcome to Terra Pack
        </p>

        <h1>
          Discover Your
          <span> Style</span>
        </h1>

        <p className="hero-description">
          Find the latest fashion, electronics, shoes
          and accessories at the best prices.
        </p>

        <Link to="/product" className="shop-btn">
          Shop Now →
        </Link>

      </div>

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
          alt="Shopping"
        />

      </div>

    </section>
  );
};

export default Hero;
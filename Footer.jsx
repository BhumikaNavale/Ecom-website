import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div>

          <h2>
            🛍️ Terra Pack
          </h2>

          <p>
            Your one-stop online shopping destination.
            Discover quality products at the best prices.
          </p>

        </div>

        {/* Links */}
        <div>

          <h3>
            Quick Links
          </h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/product">
            Products
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>

        {/* Customer Service */}
        <div>

          <h3>
            Customer Service
          </h3>

          <p>📦 Track Order</p>
          <p>↩ Return Policy</p>
          <p>❓ Help Center</p>
          <p>🔒 Privacy Policy</p>

        </div>

        {/* Contact */}
        <div>

          <h3>
            Contact Us
          </h3>

          <p>📧 support@shopzone.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Pune, Maharashtra</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 ShopZone. All rights reserved.
        </p>

        <div>
          Facebook &nbsp; Instagram &nbsp; Twitter
        </div>

      </div>

    </footer>
  );
};

export default Footer;
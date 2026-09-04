
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div className="product-card">

      <div className="product-image">

        <img
          src={product.image}
          alt={product.name}
        />

        <button
          className="wishlist"
          onClick={(e) => e.stopPropagation()}
        >
          ♡
        </button>

      </div>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <div className="rating">
          ⭐⭐⭐⭐⭐
          <span>({product.rating})</span>
        </div>

        <div className="product-bottom">

          <span className="price">
            ₹{product.price}
          </span>

          <button
            type="button"
            className="add-btn"
            onClick={handleAddToCart}
          >
            🛒 Add
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;


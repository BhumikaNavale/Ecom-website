import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {

  const products = [
    {
      id: 1,
      name: "Premium T-Shirt",
      category: "Fashion",
      price: 799,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },

    {
      id: 2,
      name: "Running Shoes",
      category: "Shoes",
      price: 1499,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },

    {
      id: 3,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2499,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },

    {
      id: 4,
      name: "Leather Backpack",
      category: "Bags",
      price: 999,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    },
  ];

  return (
    <section className="products">

      <div className="section-heading">

        <p>
          Our Collection
        </p>

        <h2>
          Featured Products
        </h2>

        <span>
          Check out our most popular products
        </span>

      </div>

      <div className="product-grid">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
};

export default Products;
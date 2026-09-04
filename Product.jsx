import React from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/Productcard";

const Product = () => {

  const [searchParams] = useSearchParams();

  const category = searchParams.get("category") || "";

  const products = [

    {
      id: 1,
      name: "Premium T-Shirt",
      category: "Fashion",
      price: 799,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },

    {
      id: 2,
      name: "Denim Jacket",
      category: "Fashion",
      price: 1499,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5"
    },

    {
      id: 3,
      name: "Running Shoes",
      category: "Shoes",
      price: 1499,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
      id: 4,
      name: "Sports Shoes",
      category: "Shoes",
      price: 1999,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772"
    },

    {
      id: 5,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 2499,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
      id: 6,
      name: "Smart Watch",
      category: "Electronics",
      price: 2999,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
      id: 7,
      name: "Leather Backpack",
      category: "Bags",
      price: 999,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
    },

    {
      id: 8,
      name: "Travel Backpack",
      category: "Bags",
      price: 1299,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3"
    }

  ];

  const filteredProducts = category
    ? products.filter(
        (product) =>
          product.category.toLowerCase() ===
          category.toLowerCase()
      )
    : products;

  return (
    <div className="product-page">

      <div className="product-header">

        <h1>
          {category
            ? `${category} Collection`
            : "All Products"}
        </h1>

        <p>
          {category
            ? `Explore our latest ${category.toLowerCase()} products`
            : "Discover our latest products"}
        </p>

      </div>

      <div className="product-grid">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>
  );
};

export default Product;
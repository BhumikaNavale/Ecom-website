import React from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {

  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Fashion",
      icon: "👕",
      description: "Latest fashion & clothing"
    },

    {
      id: 2,
      name: "Shoes",
      icon: "👟",
      description: "Trendy shoes & footwear"
    },

    {
      id: 3,
      name: "Electronics",
      icon: "🎧",
      description: "Latest electronic products"
    },

    {
      id: 4,
      name: "Bags",
      icon: "🎒",
      description: "Stylish bags & backpacks"
    }
  ];

  const handleCategoryClick = (category) => {
    navigate(`/product?category=${category}`);
  };

  return (
    <section className="categories-page">

      <div className="categories-container">

        <h1>Shop by Category</h1>

        <p className="category-subtitle">
          Explore products by category
        </p>

        <div className="category-grid">

          {categories.map((category) => (

            <div
              className="category-card"
              key={category.id}
              onClick={() =>
                handleCategoryClick(category.name)
              }
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <h2>{category.name}</h2>

              <p>{category.description}</p>

              <button>
                Explore →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;
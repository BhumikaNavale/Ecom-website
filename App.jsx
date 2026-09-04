import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import Categories from "./components/Categories";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="product" element={<Product />} />

          <Route path="categories" element={<Categories />} />

          <Route path="about" element={<About />} />

          <Route path="contact" element={<Contact />} />

          <Route path="cart" element={<Cart />} />

          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
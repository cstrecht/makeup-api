import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductPage from "../components/ProductPage";

const Product = () => {
  return (
    <div>
      <Navbar />
      <ProductPage />
      <Outlet />
    </div>
  );
};

export default Product;

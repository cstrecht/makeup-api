import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import FilterList from "../components/Products-FilterList";
import ProductsGrid from "../components/Products-grid";
import { useParams } from "react-router-dom";

const Products = () => {
  const { categoryType } = useParams();
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "30px",
        }}
      >
        <FilterList />
        <ProductsGrid />
      </div>
      <Outlet />
    </div>
  );
};

export default Products;

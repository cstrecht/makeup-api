import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getCategoryTypes } from "../common/category_types";
import Navbar from "../components/Navbar";

export default function Category() {
  let category_types = getCategoryTypes();
  return (
    <div>
      <Navbar />
      <h1>Choose your category:</h1>
      <div
        style={{
          display: "grid",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          border: "2px solid black",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "1fr 1fr",
        }}
        className="products_grid"
      >
        {category_types.map((category_type) => (
          <Link
            // style={{ display: "block", margin: "1rem 0" }}
            to={`/category/${category_type}`}
            key={category_type}
          >
            {category_type}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

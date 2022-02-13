import React from "react";
import "./CategoryGrid.css";
import { getCategoryTypes } from "../common/category_types";
import { Link } from "react-router-dom";
export default function CategoryGrid() {
  const category_types = getCategoryTypes();

  return (
    <div className="category-container">
      <h1 className="category-title">Choose your category:</h1>
      <div className="category-grid">
        {category_types.map((category_type) => (
          <div className="category-name">
            <Link to={`/category/${category_type}`} key={category_type}>
              {category_type}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import "./CategoryGrid.css";
import { getCategoryTypes } from "../common/category_types";
import { useNavigate } from "react-router-dom";
export default function CategoryGrid() {
  const category_types = getCategoryTypes();

  let navigate = useNavigate();
  const routeChange = (categoryType) => {
    navigate(`/category/${categoryType}`);
  };

  return (
    <div className="category-container">
      <h1 className="category-title">Choose your category:</h1>
      <div className="category-grid">
        {category_types.map((category_type) => (
          <div
            className="category-name"
            onClick={() => routeChange(category_type.tag)}
            key={category_type.tag}
          >
            <p>{category_type.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

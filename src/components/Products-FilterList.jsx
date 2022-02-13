import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getProductTags } from "../common/product_tags";
import "./Products-FilterList.css";

export default function FilterList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categoryType } = useParams();
  const tags = getProductTags();

  return (
    <div className="filter-container">
      <h2 className="resultsfor">Your results for: {categoryType}</h2>
      {/* Beggining of the list */}
      <p className="filterby">Filter by:</p>
      <div className="checkbox">
        <ul>
          {tags.map((tag) => (
            <li>
              <input
                key={tag}
                value={tag}
                type="checkbox"
                className="tag"
              ></input>
              {tag}
            </li>
          ))}
        </ul>
        <button
          className="btn-search"
          onClick={() => {
            var inputs = document.querySelectorAll(".tag"); // clicking on the checkboxes
            let selected_tags = []; // at first there are no selected tags
            for (let input of inputs) {
              if (input.checked) {
                //checked is a param that comes with the API
                selected_tags.push(input.defaultValue); // if it is "checked", add to id the defaultValue (also comes with the API)
              }
            }
            let url_tags = selected_tags.join(",");
            if (url_tags) {
              setSearchParams({ tags: url_tags });
            } else {
              setSearchParams({});
            }
          }}
        >
          Search
        </button>
        {/* Clear button */}
        <button
          onClick={() => {
            var inputs = document.querySelectorAll(".tag"); // clicking on the checkboxes
            let selected_tags = []; // at first there are no selected tags
            for (let input of inputs) {
              if (input.checked) {
                //checked is a param that comes with the API
                input.checked = false;
                selected_tags.pop(input.defaultValue); // if it is "checked", add to id the defaultValue (also comes with the API)
              }
            }
            let url_tags = selected_tags.join(",");
            if (url_tags) {
              setSearchParams({ tags: url_tags });
            } else {
              setSearchParams({});
            }
          }}
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}

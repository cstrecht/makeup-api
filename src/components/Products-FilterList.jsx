import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getProductTags } from "../common/product_tags";
import "./Products-FilterList.css";

export default function FilterList() {
  // disable linter rule for the following line
  // since we have to declare searchParams to react-router
  // useSearchParams() works properly.
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const tags = getProductTags();

  return (
    <div className="filter-container">
      {/* Beggining of the filter list */}
      <p
        style={{
          margin: "0",
        }}
      >
        Filter by:
      </p>
      <div className="filter-checkbox">
        <ul>
          {tags.map((tag) => (
            <li key={tag.id}>
              <input value={tag.id} type="checkbox" className="tag"></input>
              {tag.name}
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

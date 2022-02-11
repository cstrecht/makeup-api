// This component will render the product page,
// meaning that it will show to the client the
// page with all products from the same type.
import React, { useState, useEffect } from "react";
import { Link, useParams, Outlet, useSearchParams } from "react-router-dom";
import { getProductsByTypeAndTags } from "../common/makeupAPI";
import { getProductTags } from "../common/product_tags"; //will get all the existence tags
import Navbar from "../components/Navbar";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //To "change" the URL
  const tagParam = searchParams.get("tags");
  const { categoryType } = useParams();
  const [products, setProducts] = useState([]);
  const tags = getProductTags();

  useEffect(() => {
    getProductsByTypeAndTags(categoryType, tagParam).then((products) =>
      setProducts(products)
    );
  }, [categoryType, tagParam]);

  return (
    <div>
      <Navbar />
      <h2>Your results for: {categoryType}</h2>
      {/* It will return a list made of checkboxes */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          padding: "10px",
        }}
        className="container"
      >
        <div
          style={{
            width: "35%",
            height: "auto",
            background: "red",
            float: "left",
          }}
          className="tags_checkbox"
        >
          <label>Filter by:</label>
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
            style={{
              alignItems: "center",
            }}
            onClick={() => {
              var inputs = document.querySelectorAll(".tag"); // clicking on the checkboxes
              let selected_tags = []; // at first there are no selected tags

              for (let input of inputs) {
                if (input.checked) {
                  //checked is a param that comes with the API
                  selected_tags.push(input.defaultValue); // if it is "checked", add to id the defaultValue (also comes with the API)
                }
              }
              let url_tags = selected_tags.join(","); // ?
              if (url_tags) {
                setSearchParams({ tags: url_tags });
              } else {
                setSearchParams({});
              }
            }}
          >
            Search
          </button>
          <button
            style={{
              alignItems: "center",
            }}
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
              let url_tags = selected_tags.join(","); // ?
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

        <div
          style={{
            height: "auto",
            backgroundColor: "orange",
          }}
          className="products_names"
        >
          {products.map((product) => (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/category/${categoryType}/${product.id}`}
              key={product.id}
            >
              {product.name}
            </Link>
          ))}

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Products;

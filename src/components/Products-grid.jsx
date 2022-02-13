import React, { useState, useEffect } from "react";
import {
  useNavigate,
  useParams,
  Outlet,
  useSearchParams,
} from "react-router-dom";
import { getProductsByTypeAndTags } from "../common/makeupAPI";
import "./Products-grid.css";

export default function ProductsGrid() {
  const [searchParams] = useSearchParams(); //To use the params in the URL
  const tagParam = searchParams.get("tags");
  const { categoryType } = useParams();
  const [products, setProducts] = useState([]);

  let navigate = useNavigate();
  const routeChange = (id) => {
    navigate(`/category/${categoryType}/${id}`);
  };

  useEffect(() => {
    getProductsByTypeAndTags(categoryType, tagParam).then((products) =>
      setProducts(products)
    );
  }, [categoryType, tagParam]);

  return (
    <div>
      <div className="products-grid">
        {products.map((product) => (
          <div
            key={`product_${product.id}`}
            className="grid-item"
            onClick={() => routeChange(product.id)}
          >
            <img
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://www.trendsetter.com/pub/media/catalog/product/placeholder/default/no_image_placeholder.jpg";
              }}
              alt={product.name}
              src={product.image_link}
              width="100"
            ></img>

            <p
              style={{
                fontWeight: "bold",
                margin: "0",
              }}
            >
              {product.name.toUpperCase()}{" "}
            </p>
            <p
              style={{
                fontSize: "15px",
                margin: "0",
                color: "rgba(217, 200, 181, 1)",
              }}
            >
              {product.brand}
            </p>
            <p
              style={{
                margin: "0",
                fontSize: "15px",
              }}
            >
              {product.price + " $"}
            </p>
            <p
              style={{
                margin: "0",
              }}
            >
              {product.rating ? product.rating + " / 5" : "No rating"}
            </p>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

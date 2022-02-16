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
  const [searchParams] = useSearchParams();
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
            className="grid-item" //this is the 'card' of the product
            onClick={() => routeChange(product.id)}
          >
            <p>
              Category: <strong>{product.product_type}</strong>
            </p>
            <img
              className="products-image"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src =
                  "https://www.trendsetter.com/pub/media/catalog/product/placeholder/default/no_image_placeholder.jpg";
              }}
              alt={product.name}
              src={product.image_link}
            ></img>

            <p className="product-name">{product.name.toUpperCase()} </p>
            <p className="product-brand">{product.brand}</p>
            <p className="product-price">{product.price + " $"}</p>
            <div className="product-pallete">
              {product.product_colors.map((product_color) => (
                <div
                  className="color"
                  style={{
                    background: product_color.hex_value,
                  }}
                ></div>
              ))}
            </div>
            <p className="product-rating">
              {" "}
              {product.rating
                ? Math.round((product.rating * 100) / 5) + " /100"
                : "No rating"}
            </p>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../common/makeupAPI";
import "./ProductPage.css";

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProductById(productId).then((product) => setProduct(product));
  }, [productId]);

  return (
    <div>
      <div className="product-header">
        <h1>{product.name}</h1>
        <h2>{product.brand ? "by " + product.brand : " "} </h2>
      </div>
      <div className="product-container">
        <div className="product-photo">
          <img
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "https://www.trendsetter.com/pub/media/catalog/product/placeholder/default/no_image_placeholder.jpg";
            }}
            alt={product.name}
            src={product.image_link}
            className="product-image"
          ></img>
        </div>
        <div className="product-info">
          <div>
            <div className="info-desc">{product.description}</div>
            <h1>
              {product.price ? product.price : "Unavailable price"}

              {product.price_sign ? product.price_sign : " $"}

              {product.currency ? product.currency : " USD"}
            </h1>

            <p>
              {product.rating
                ? "This product has a rating of " +
                  Math.round((product.rating * 100) / 5) +
                  " %"
                : "This product has no rating."}
            </p>

            <a
              className="button"
              href={product.product_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy me here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

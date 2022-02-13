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
        <h2>{"by " + product.brand}</h2>
      </div>
      <div className="product-container">
        <div className="product-left">
          <div className="product-info">
            <div>{product.description}</div>
            <h2>
              {product.price ? product.price : "Unavailable price"}

              {product.price_sign ? product.price_sign : " $"}

              {product.currency ? product.currency : " USD"}
            </h2>
            <p>
              {product.rating
                ? product.rating + " stars"
                : "This product has no rating."}
            </p>

            <a
              className="button"
              href={product.product_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy me
            </a>
          </div>
        </div>
        <div className="product-right">
          <img
            alt={product.name}
            src={product.image_link}
            className="product-image"
          ></img>
        </div>
      </div>
    </div>
  );
}

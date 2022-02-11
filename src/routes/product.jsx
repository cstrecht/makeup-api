import React, { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { getProductById } from "../common/makeupAPI";
import Navbar from "../components/Navbar";

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({}); //initial state is an empty object

  useEffect(() => {
    getProductById(productId).then((product) => setProduct(product));
  }, [productId]);
  //This function will GET the specific product, THEN the product will be setted and
  //it will change the initial state to the state that I wanted, which was
  //the state with the single product showing up on the screen.

  return (
    <div>
      <Navbar />
      <h1>{product.name}</h1>
      <h2>{product.brand}</h2>
      <div>{product.description}</div>
      <h2>
        {product.price}

        {product.price_sign ? product.price_sign : "$"}

        {product.currency ? product.currency : " USD"}
      </h2>
      <p>
        {product.rating
          ? product.rating + " ⭐️"
          : "This product is not rated."}
      </p>

      <Outlet />
    </div>
  );
};

export default Product;

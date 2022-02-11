import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Products from "./routes/products";
import About from "./routes/about";
import Contact from "./routes/contact";
import Product from "./routes/product";
import Category from "./routes/category";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {" "}
        /
      </Route>
      <Route path="category" element={<Category />} />
      <Route path="category/:categoryType" element={<Products />} />
      <Route path="category/:categoryType/:productId" element={<Product />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);

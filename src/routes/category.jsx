import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import CategoryGrid from "../components/CategoryGrid";

export default function Category() {
  return (
    <div>
      <Navbar />
      <CategoryGrid />
      <Outlet />
    </div>
  );
}

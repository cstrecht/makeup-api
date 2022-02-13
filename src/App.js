import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Herohome from "./components/Herohome";

export default function App() {
  return (
    <div>
      <Navbar />

      <Herohome />

      <Outlet />
    </div>
  );
}

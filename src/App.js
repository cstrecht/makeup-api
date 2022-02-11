import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <h1>I am the title</h1>
      <p>I am the subtitle</p>
      <Outlet />
    </div>
  );
}

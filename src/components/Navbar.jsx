import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  return (
    <nav className="navbar">
      <h1 className="logo" onClick={routeChange}>
        CHIRO
      </h1>
      <div className="navlinks">
        <Link className="navbar_link" to="/category">
          Categories
        </Link>{" "}
        <Link className="navbar_link" to="/about">
          About
        </Link>{" "}
        <Link className="navbar_link" to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

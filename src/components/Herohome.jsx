import React from "react";
import "./Herohome.css";

export default function Herohome() {
  return (
    <div className="hero-container">
      <div className="hero-header">
        <h1 className="title">This is CHIRO</h1>
        <h2 className="subtitle">Beauty for everyone. Your time is now.</h2>
      </div>
      <div>
        <img
          src="https://images.pngnice.com/download/2007/Makeup-PNG-Transparent-Image.png"
          alt=""
          className="brush-img"
        />
      </div>
    </div>
  );
}

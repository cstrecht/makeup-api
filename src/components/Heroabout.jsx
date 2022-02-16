import React from "react";
import "./Heroabout.css";

export default function Heroabout() {
  return (
    <div>
      <div className="about-header">
        <h1 className="about-title">About us</h1>
        <h2 className="about-subtitle">Lorem ipsum, dolor sit ae</h2>
      </div>
      <p className="description">
        As much mud in the streets as if the waters had but newly retired from
        the face of the earth, and it would not be wonderful to meet a
        Megalosaurus, forty feet long or so, waddling like an elephantine lizard
        up Holborn Hill. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Augue interdum velit euismod in pellentesque massa placerat duis.
        Accumsan lacus vel facilisis volutpat. Sed vulputate mi sit amet mauris.
        Etiam tempor orci eu lobortis elementum nibh. Velit dignissim sodales ut
        eu sem integer vitae justo eget. Duis at consectetur lorem donec massa.
        At varius vel pharetra vel. Eu sem integer vitae justo eget. Id cursus
        metus aliquamtesque diam volutpat commodo sed egestas egestas fringilla.
      </p>
      <img
        src="https://www.pngmart.com/files/17/Cosmetics-Product-PNG-Pic.png"
        alt="Products of makeup"
        className="about-image"
      />
    </div>
  );
}

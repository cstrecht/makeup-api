import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div>
        <h1>This website is fictional</h1>
        <h2>In fact, there is no makeup company called CHIRO.</h2>
        <p>
          This name came out in honor to "Chihiro", a fictional character from
          the anime movie <em>Spirited Away</em>, by Hayao Miyazaki.
        </p>
        <p>
          You can check the repository of this project{" "}
          <a
            target={"_blank"}
            href="https://github.com/cstrecht/chiro"
            style={{ color: "dodgerblue" }}
          >
            here.
          </a>
        </p>
        <footer>designed and coded with &#9829; by carolina strecht</footer>
      </div>
    </div>
  );
}

import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div>
        <h1>This website is fictional</h1>
        <h3>There is no makeup company called CHIRO.</h3>
        <p>
          This name came out in honor of "Chihiro", a fictional character from
          the movie <em>Spirited Away</em>. It was the first movie I saw in my
          life (that I can remember).
        </p>
        <p>
          Also, this is the first project that I did using React. Can you get
          the connection? :)
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
        <footer>coded with &#9829; by carolina strecht</footer>
      </div>
    </div>
  );
}

import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="container bg-pink">
      <div className="news-letter">
        <h1>Get Execlusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Your Email id"
          />
          <span className="input-group-text" id="basic-addon2">
            Subscribe
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

import React from "react";
import "./Offers.css";
import exclusive_image from "../../assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="container main">
      <div className="offers d-flex">
        <div className="col-6 left-text">
          <h1>
            Exclusive <br />
            Offers For You <br />
          </h1>
          <h6>ONLY ON BEST SELLERS PRODUCTS</h6>
          <button className="btn">Check Now</button>
        </div>
        <div className="col-6 right-image">
          <img src={exclusive_image} alt="girl" />
        </div>
      </div>
    </div>
  );
};

export default Offers;

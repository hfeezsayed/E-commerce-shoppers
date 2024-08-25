import React from "react";
import "./Hero.css";
import hand_icon from "../../assets/hand_icon.png";
import arrow from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="container-fluid hero-bg">
      <div className="container main-hero">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-hero-text">
              <h6>NEW ARRIVALS ONLY</h6>
              <div>
                <h2>
                  new
                  <img src={hand_icon} alt="hand" /> <br />
                  Collections <br />
                  for everyone
                </h2>
                <button className="btn">
                  Latest Collection <img src={arrow} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-hero-image">
              <img src={hero_image} alt="hero image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

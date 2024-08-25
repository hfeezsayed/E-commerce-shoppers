import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";
import pintester_icon from "../../assets/pintester_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";

const Footer = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="footer">
        <div className="container">
          <div className="footer-brand d-flex justify-content-center">
            <img src={logo} alt="logo" />
            <h2>SHOPPER</h2>
          </div>
          <div className="footer-menu">
            <ul>
              <li>Company</li>
              <li>Products</li>
              <li>Office</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="social-icons d-flex justify-content-center gap-3 mt-4">
            <img src={instagram_icon} alt="instagram" />
            <img src={pintester_icon} alt="pinterest" />
            <img src={whatsapp_icon} alt="whatsapp" />
          </div>
          <hr />
          <div className="copyright-text text-center">
            <small>Copyright © 2024 - All Right Reserved</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

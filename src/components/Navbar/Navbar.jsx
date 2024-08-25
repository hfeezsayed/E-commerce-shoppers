import React, { useContext, useState } from "react";
import "./Navbar.css";
//import { Link } from "react-router-dom";
import cartBag from "../../assets/cart_icon.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <div className="brand">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
            <span>SHOPPER</span>
          </Link>
        </div>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <Link
              className={menu === "shop" ? "active" : "nav-item"}
              onClick={() => {
                setMenu("shop");
              }}
              to="/"
            >
              Shop
            </Link>
            <Link
              className={menu === "mens" ? "active" : "nav-item"}
              onClick={() => {
                setMenu("mens");
              }}
              to="/mens"
            >
              Men
            </Link>
            <Link
              className={menu === "women" ? "active" : "nav-item"}
              onClick={() => {
                setMenu("women");
              }}
              to="/women"
            >
              Women
            </Link>
            <Link
              className={menu === "kids" ? "active" : "nav-item"}
              onClick={() => {
                setMenu("kids");
              }}
              to="/kids"
            >
              Kids
            </Link>
          </ul>
          <div className="d-flex right-block">
            <Link
              className="btn btn-outline-success mx-2"
              type="submit"
              to="/login"
            >
              Login
            </Link>
            <div className="mx-2"></div>
            <Link to="/cart">
              <img src={cartBag} alt="bag" />
            </Link>
            <span className="cart-count">{getTotalCartItems()}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

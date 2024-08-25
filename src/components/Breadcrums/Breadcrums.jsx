import React from "react";
import "./Breadcrum.css";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrum container my-5">
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            Shop
          </li>
          <li className="breadcrumb-item" aria-current="page">
            {product.category}
          </li>
          <li className="breadcrumb-item" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrums;

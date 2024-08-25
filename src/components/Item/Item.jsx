import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <div className="card">
        <Link to={`/product/${props.id}`}>
          <img
            src={props.image}
            alt="item image"
            className="card-img-top"
            onClick={window.scrollTo(0, 0)}
          />
        </Link>
        <p>{props.name}</p>
        <div className="item-prices d-flex gap-3 px-2">
          <div className="item-price-new">${props.new_price}</div>
          <div className="item-price-old">${props.old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;

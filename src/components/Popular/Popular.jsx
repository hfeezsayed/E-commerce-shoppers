import React from "react";
import "./Popular.css";
import data_product from "../../assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="container">
      <div className="popular">
        <h1>POPULAR IN WOMEN </h1>
        <hr className="hr-line" />
        <div className="row">
          <div className="popular-item d-flex">
            {data_product.map((item, i) => {
              return (
                <div className="col">
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;

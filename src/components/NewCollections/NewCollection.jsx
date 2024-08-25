import React from "react";
import "./NewCollections.css";
import new_collection from "../../assets/new_collections";
import Item from "../Item/Item";

const NewCollection = () => {
  return (
    <div className="container">
      <div className="new-collection">
        <h1>NEW COLLECTIONS</h1>
        <hr className="hr-line" />
        <div className="collections row">
          {new_collection.map((item, index) => {
            return (
              <div className="col-md-3 collection-item">
                <Item
                  key={index}
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
  );
};

export default NewCollection;

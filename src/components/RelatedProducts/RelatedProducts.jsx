import React from "react";
import "./RelatedProducts.css";
import data_product from "../../assets/data";
import Item from "../../components/Item/Item";

const RelatedProducts = () => {
  return (
    <div className="container related-products">
      <h1 className="text-center">Related Products</h1>
      <hr className="hr-line" />
      <div className="row related-products-item">
        {data_product.map((item, index) => {
          return (
            <div key={index} className="col-md-3">
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
  );
};

export default RelatedProducts;

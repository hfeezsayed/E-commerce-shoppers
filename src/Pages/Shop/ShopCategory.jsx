import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../context/ShopContext";
import dropdown_icon from "../../assets/dropdown_icon.png";
import Item from "../../components/Item/Item";

const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="container">
        <img src={props.banner} alt="banner" />
        <div className="shopCategory-indexSort mt-5">
          <p>
            <span>Showing 1-12</span> out of 36 products.
          </p>
          <div className="ShopCategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="row shopcategory-products mt-4">
          {allProduct.map((item, index) => {
            if (props.category === item.category) {
              return (
                <div className="col-md-3 mb-4" key={index}>
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
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadMore">Explore More</div>
      </div>
    </div>
  );
};

export default ShopCategory;

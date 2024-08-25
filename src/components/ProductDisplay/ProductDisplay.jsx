import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="container">
        <div className="row">
          <div className="col-md-1">
            <div className="product-image-left">
              <div className="product-image-list">
                <img src={product.image} />
                <img src={product.image} />
                <img src={product.image} />
                <img src={product.image} />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-display-image">
              <img src={product.image} className="product-display-img" />
            </div>
          </div>
          <div className="col-md-7">
            <div className="product-display-right">
              <h1>{product.name}</h1>
              <div className="product-display-right">
                <img src={star_icon} alt="image" />
                <img src={star_icon} alt="image" />
                <img src={star_icon} alt="image" />
                <img src={star_icon} alt="image" />
                <img src={star_dull_icon} alt="image" />
                <span className="px-2">(122)</span>
              </div>
              <div className="product-prices d-flex gap-4 my-4">
                <div className="old-price fs-5">
                  <del>${product.old_price}</del>
                </div>
                <div className="new-price fs-5">${product.new_price}</div>
              </div>
              <div className="product-display-description mt-3 mb-4 font-small-common">
                Purple & black T-shirt for men Solid with minimal embroidered
                detail Regular length Polo collar Short, regular sleeves Knitted
                pure cotton fabric Button closure
              </div>
              <div className="product-size mb-3">
                <h1 className="my-2 fs-5 mb-3">Select Size</h1>
                <div className="product-right-sizes d-flex gap-3 font-small-common">
                  <div>S</div>
                  <div>M</div>
                  <div>L</div>
                  <div>XL</div>
                  <div>XXL</div>
                </div>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => {
                  addToCart(product.id);
                }}
              >
                ADD TO CART
              </button>
              <p className="product-right-category mt-4 mb-0 font-small-common">
                <span className="fw-bold">Category : </span> {product.category},
                T-Shirt, Crop Top
              </p>
              <p className="product-right-category font-small-common">
                <span className="fw-bold">Tags : </span> Modern, Latest
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

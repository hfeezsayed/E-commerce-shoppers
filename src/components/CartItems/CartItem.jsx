import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

const CartItem = () => {
  const { getCartTotalAmount, allProduct, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="mt-4">
      <table className="cartItems table table-responsive my-4 text-center">
        <thead>
          <tr>
            <th scope="col">Products</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {allProduct.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <tr className="cartItems-fromat" key={e.id}>
                  <td>
                    <img
                      src={e.image}
                      alt=""
                      className="cartIcon-productIcon"
                    />
                  </td>
                  <td>{e.name}</td>
                  <td>${e.new_price}</td>
                  <td>
                    <button className="cartItem-quanitity">
                      {cartItems[e.id]}
                    </button>
                  </td>
                  <td>
                    <p>{e.new_price * cartItems[e.id]}</p>
                  </td>
                  <td>
                    <img
                      src={remove_icon}
                      alt=""
                      onClick={() => {
                        removeFromCart(e.id);
                      }}
                      className="remove-icon"
                    />
                  </td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
      <div className="cartItems-down">
        <div className="row">
          <div className="col-md-5 cartItems-total">
            <h1>Cart Totals</h1>
            <div className="mb-4">
              <div className="cartItem-total-item">
                <p>Subtotal</p>
                <p>${getCartTotalAmount()}</p>
              </div>
              <hr />
              <div className="cartItem-total-item">
                <p>Shipping fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartItem-total-item">
                <h3>Total</h3>
                <h3>${getCartTotalAmount()}</h3>
              </div>
            </div>
            <button className="btn btn-primary">PROCEED TO CHECKOUT</button>
          </div>
          <div className="col-md-2"></div>
          <div className="cartItems-promocode col-md-5 mt-4">
            <p>If you have a promo code, Enter it here.</p>
            <div className="cartItems-promobox">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="promo code..."
                />
                <span className="input-group-text">Submit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

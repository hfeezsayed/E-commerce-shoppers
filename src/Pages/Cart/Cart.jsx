import React from "react";
import "./Cart.css";
import CartItem from "../../components/CartItems/CartItem";

const Cart = () => {
  return (
    <div className="container mt-4">
      <CartItem />
    </div>
  );
};

export default Cart;

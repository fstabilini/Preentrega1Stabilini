import React from "react";
import "./CartWidget.css";

function CartWidget() {
  return (
    <div className="cart-widget">
      <span role="img" aria-label="cart">
        🛒
      </span>
      <span className="cart-notification">5</span>
    </div>
  );
}

export default CartWidget;

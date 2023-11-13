import React, { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (stock > count) {
      setCount((valor) => valor + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((valor) => valor - 1);
    }
  };

  return (
    <div className="item-count-container">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default ItemCount;

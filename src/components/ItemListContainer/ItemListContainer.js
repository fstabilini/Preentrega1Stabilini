import React from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;

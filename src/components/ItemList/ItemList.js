import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import data from "../../data.json";
import "./ItemList.css";

export default function ItemList() {
  return (
    <div className="item-list-container">
      {data.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

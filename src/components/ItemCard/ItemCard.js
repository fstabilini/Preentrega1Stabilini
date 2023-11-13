import React from "react";
import "./ItemCard.css";
import { Link } from "react-router-dom";

function ItemCard({ item }) {
  return (
    <Link to={`/item/${item.id}`} className="item-card-wrapper">
      <div className="item-card">
        <h2 className="item-card-category">{item.categoria}</h2>
        <p className="item-card-info">{item.nombre}</p>
        <img className="item-card-image" src={item.imagen} alt={item.nombre} />
        <p className="item-card-info">${item.precio.toFixed(2)}</p>
      </div>
    </Link>
  );
}

export default ItemCard;

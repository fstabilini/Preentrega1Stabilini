import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ info }) {
  const params = useParams();
  const id = params.id;

  const item = info.find((item) => item.id == id);

  return (
    <div className="item-detail">
      <h2 className="item-detail-category">{item.categoria}</h2>
      <p className="item-detail-info">{item.nombre}</p>
      <img className="item-detail-image" src={item.imagen} alt={item.nombre} />
      <p className="item-detail-info">${item.precio.toFixed(2)}</p>
      <ItemCount stock={3} />
      <button className="item-detail-button">Agregar al carrito</button>
      <Link to={`/`}>
        <button className="item-detail-button">Volver</button>
      </Link>
    </div>
  );
}

export default ItemDetail;

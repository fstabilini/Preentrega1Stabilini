import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-title">MundoMix</h1>
      <ul className="navbar-menu">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Electrónica</a>
        </li>
        <li>
          <a href="#">Moda</a>
        </li>
        <li>
          <a href="#">Hogar</a>
        </li>
        <li>
          <a href="#">Libros</a>
        </li>
        <li>
          <a href="#">Deportes</a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
}

export default Navbar;

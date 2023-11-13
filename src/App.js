// import ItemCount from "./components/ItemCount/ItemCount";
import React, { useState } from "react";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import data from "./data.json";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="navbar-app">
          <Navbar />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting="Bienvenido a nuestra tienda!"
                info={data}
              />
            }
          />
          <Route
            path="/category/:category"
            element={<ItemListContainer info={data} />}
          />
          <Route path="/item/:id" element={<ItemDetail info={data} />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

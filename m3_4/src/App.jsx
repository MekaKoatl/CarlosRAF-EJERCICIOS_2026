import React from "react";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function App() {
  let [nombre, setNombre] = useState("");

  function cambiarNombre(event) {
    setNombre(event.target.value);
  }

  return (
    <div>
      <input type="text" value={nombre} onChange={cambiarNombre} />
      <p>{nombre}</p>
    </div>
  );
}

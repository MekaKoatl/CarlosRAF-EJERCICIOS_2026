import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { compositores as datosBase } from "./DataCompositores";
import BorrarComp from "./BorrarComp";

export default function App() {
  const [compositores, setCompositores] = useState(datosBase);

  function añadir(nombre) {
    const nuevo = {
      id: Date.now(),
      nombre: nombre,
      nacio: null,
      canciones: [],
    };
    setCompositores([...compositores, nuevo]);
  }

  function borrar(id) {
    setCompositores(compositores.filter((c) => c.id !== id));
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              compositores={compositores}
              onAñadir={añadir}
              onBorrar={borrar}
            />
          }
        />
        <Route
          path="/eliminar"
          element={
            <Home
              compositores={compositores}
              onAñadir={añadir}
              onBorrar={borrar}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

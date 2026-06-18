import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { compositores as datosBase } from "./DataCompositores";

export default function App() {
  const [compositores, setCompositores] = useState(datosBase);

  function añadir(nombre) {
    setCompositores([...compositores, nombre]);
  }

  function borrar(nombre) {
    setCompositores(compositores.filter((c) => c !== nombre));
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
      </Routes>
    </BrowserRouter>
  );
}

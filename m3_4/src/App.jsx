import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

export default function App() {
  const [compositores, setCompositores] = useState([
    "Wolfgang Amadeus Mozart",
    "Ludwig van Beethoven",
    "Johann Sebastian Bach",
  ]);

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

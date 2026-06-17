import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Nombres from "./Nombres";
import Gatos from "./Gatos";
import Perros from "./Perros";
import Equipo from "./Equipo";
import Listapelis from "./Listapelis";
import Pelicula from "./Pelicula";

// import JugadorDetalle from "./JugadorDetalle";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/nombres">Nombres</Link> |{" "}
        <Link to="/gatos">Gatos</Link> | <Link to="/perros">Perros</Link> |{" "}
        <Link to="/equipo">Equipo</Link> |{" "}
        <Link to="/listapelis">Películas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nombres" element={<Nombres />} />
        <Route path="/gatos" element={<Gatos />} />
        <Route path="/perros" element={<Perros />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/listapelis" element={<Listapelis />} />
        <Route path="/pelicula/:id" element={<Pelicula />} />
        {/* <Route path="/jugador/:id" element={<JugadorDetalle />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

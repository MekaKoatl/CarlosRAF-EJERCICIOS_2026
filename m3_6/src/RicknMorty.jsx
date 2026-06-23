import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  let [personajesRnM, setPersonajesRnM] = useState([]);
  let [paginaRnM, setPaginaRnM] = useState(1);
  let [infoRnM, setInfoRnM] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${paginaRnM}`)
      .then((res) => res.json())
      .then((data) => {
        setPersonajesRnM(data.results);
        setInfoRnM(data.info);
      });
  }, [paginaRnM]);

  return (
    <div>
      <div className="personajes">
        {personajesRnM.slice(0, 10).map((p) => (
          <div className="personaje" key={p.id}>
            <img src={p.image} alt={p.name} width={100} />
            <p>
              {p.name} <br /> Species: {p.species} <br /> Status: {p.status} <br />  Origin: {p.origin.name} <br /> Last known Location: {p.location.name}
            </p>
          </div>
        ))}
      </div>
      <div className="paginacion">
        <button
          onClick={() => setPaginaRnM(paginaRnM - 1)}
          disabled={!infoRnM.prev}
        >
          Anterior
        </button>
        <span> Página {paginaRnM} </span>
        <button
          onClick={() => setPaginaRnM(paginaRnM + 1)}
          disabled={!infoRnM.next}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

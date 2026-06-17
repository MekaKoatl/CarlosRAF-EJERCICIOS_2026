import { useState } from "react";
import { peliculas } from "./Datapelis";
import { Link } from "react-router-dom";

export default function Listapelis() {
  const [lista] = useState(peliculas);

  return (
    <div>
      {lista.map((peli) => (
        <div key={peli.id}>
          <Link to={`/pelicula/${peli.id}`}>
            <h2>{peli.titulo}</h2>
            <img src={peli.imagen} alt={peli.titulo} width={100} />
          </Link>
        </div>
      ))}
    </div>
  );
}

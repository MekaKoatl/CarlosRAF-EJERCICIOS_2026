import { Link } from "react-router-dom";
import { useState } from "react";
import { miembros } from "./Dataequipo";

export default function Equipo() {
  let [equipo] = useState(miembros);

  return (
    <div>
      <h2>Equipo</h2>
      {equipo.map((e) => (
        <div key={e.id}>
          <p>#{e.id} {e.nombre} — {e.posicion}</p>
          <Link to={`/jugador/${e.id}`}>Más info</Link>
        </div>
      ))}
    </div>
  );
}
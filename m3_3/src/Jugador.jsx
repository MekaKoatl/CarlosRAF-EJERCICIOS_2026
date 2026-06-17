import { useParams } from "react-router-dom";
import { miembros } from "./Dataequipo";

export default function Jugador() {
  const { id } = useParams();
  const e = miembros.find((p) => p.id === Number(id));

  return (
    <div>
      <h1>{e.nombre}</h1>
      <h2>{e.posicion}</h2>
     <p>{e.Goles}</p>
     <p>{e.Minutos}</p>
    </div>
  );
}
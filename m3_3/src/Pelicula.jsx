import { useParams } from "react-router-dom";
import { peliculas } from "./Datapelis";

export default function Pelicula() {
  const { id } = useParams();
  const peli = peliculas.find((p) => p.id === Number(id));

  return (
    <div>
      <h1>{peli.titulo}</h1>
      <img src={peli.imagen} alt={peli.titulo} width={200} />
      <p>{peli.sinopsis}</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${new URL(peli.url).searchParams.get("v")}`}
        allowFullScreen
      />
    </div>
  );
}

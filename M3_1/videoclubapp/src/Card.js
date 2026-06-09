// import { videoclub } from "./videoclub";

export function Card({ pelicula }) {
  return (
    <div className="Card">
      <img src={pelicula.cartel}/>
      <h3>{pelicula.titulo}</h3>
      <p>{pelicula.sinopsis}</p>
    </div>
  );
}
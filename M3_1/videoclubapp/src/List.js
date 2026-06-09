import { Card } from "./Card.js";

export function MovieList({ peliculas }) {
  return (
    <div className="MovieList">
      {peliculas.map((pelicula, index) => (
        <Card key={index} pelicula={pelicula} />
      ))}
    </div>
  );
}
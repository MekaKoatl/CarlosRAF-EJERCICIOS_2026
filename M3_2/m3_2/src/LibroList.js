import { Libro } from "./Libro";

export function LibroList({ libros }) {
  return (
    <main>
      {libros.map((libro) => (
        <Libro key={libro.id} libro={libro} />
      ))}
    </main>
  );
}
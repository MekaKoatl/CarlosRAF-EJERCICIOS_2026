import { Libro } from "./Libro";

export function Footer({ libros }) {
  const libroOferta = libros[Math.floor(Math.random() * libros.length)];

  return (
    <footer>
      <h2>Libro en oferta</h2>
      <Libro libro={libroOferta} />
    </footer>
  );
}
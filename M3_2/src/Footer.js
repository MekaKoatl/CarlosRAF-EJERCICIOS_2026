import { Libro } from "./Libro";

export function Footer({ libros, muelle }) {
  let libroOferta = libros[Math.floor(Math.random() * libros.length)];

  return (
    <footer>
      <h2>Libro en oferta</h2>
      <div className="libro_footer" >
        <Libro libro={libroOferta} />
      </div>
      <div>
<h2>Contacto: #{muelle.contacto.telefono}</h2>
      </div>
    </footer>
  );
}

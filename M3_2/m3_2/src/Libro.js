import { useState } from "react";

export function Libro({ libro }) {
  const [stock, setStock] = useState(libro.stock);

  function quitarStock() {
    if (stock > 0) setStock(stock - 1);
  }

  return (
    <div>
      <h1>{libro.titulo}</h1>
      <h2>{libro.autor}</h2>
      <img src={libro.img} alt={libro.titulo} width={100} />
      <p>{libro.descripcion}</p>
      <p>{stock === 0 ? "No quedan copias" : `Stock: ${stock}`}</p>
      <button onClick={quitarStock} disabled={stock === 0}>-1</button>
    </div>
  );
}
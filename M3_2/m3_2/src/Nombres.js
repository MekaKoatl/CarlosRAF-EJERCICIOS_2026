import { useState } from "react";

export function Nombres() {
  const nombres = ["Luke", "Carlos", "Cris", "Karla", "Kamilo"];
  const [index, setIndex] = useState(0);

  function siguiente() {
    setIndex((index + 1) % nombres.length);
  }

  return (
    <div>
      <h1>{nombres[index]}</h1>
      <button onClick={siguiente}>Siguiente</button>
    </div>
  );
}
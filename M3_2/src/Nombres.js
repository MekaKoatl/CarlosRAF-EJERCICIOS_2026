import { useState } from "react";

export function Nombres() {
  let nombres = ["Luke", "Carlos", "Cris", "Karla", "Kamilo"];
  let [index, setIndex] = useState(0);

  function siguiente() {
    setIndex((index + 1) % nombres.length);
  }

  return (
    <div className="Nombres">
      <h1>{nombres[index]}</h1>
      <br />
      <button onClick={siguiente}>Siguiente</button>
    </div>
  );
}
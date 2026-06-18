import { useState } from "react";

export default function BorrarComp({ onBorrar }) {
  const [nombre, setNombre] = useState("");

  function handleBorrar() {
    onBorrar(nombre);
    setNombre("");
  }

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Compositor a eliminar"
      />
      <button onClick={handleBorrar}>Eliminar</button>
    </div>
  );
}
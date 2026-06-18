import { useState } from "react";
import ListaCompositores from "./ListaCompositores";
import BorrarComp from "./BorrarComp";

export default function Home({ compositores, onAñadir, onBorrar }) {
  const [nombre, setNombre] = useState("");

  return (
    <div>
      <ListaCompositores compositores={compositores} onBorrar={onBorrar} />

      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Añadir compositor"
      />

      <button
        onClick={() => {
          onAñadir(nombre);
          setNombre("");
        }}
      >
        Añadir
      </button>

      <BorrarComp onBorrar={onBorrar} />
    </div>
  );
}

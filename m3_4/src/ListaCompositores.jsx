export default function ListaCompositores({ compositores, onBorrar }) {
  return (
    <ul>
      {compositores.map((c) => (
        <li key={c.id}>
          {c.nombre}
          <button onClick={() => onBorrar(c.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}
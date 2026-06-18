export default function ListaCompositores({ compositores, onBorrar }) {
  return (
    <ul>
      {compositores.map((c, index) => (
        <li key={index}>
          {c} <button onClick={() => onBorrar(c)}>X</button>
        </li>
      ))}
    </ul>
  );
}
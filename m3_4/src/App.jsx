export default function App() {
  const [compositores, setCompositores] = useState([
    "Wolfgang Amadeus Mozart",
    "Ludwig van Beethoven",
    "Johann Sebastian Bach",
  ]);
  const [nombre, setNombre] = useState("");
  const [mostrar, setMostrar] = useState("");
  const [borrar, setBorrar] = useState("");

  function handleBorrar() {
    setCompositores(compositores.filter((c) => c !== borrar));
    setBorrar("");
  }

  function handleClick() {
    setCompositores([...compositores, nombre]);
    setNombre("");
  }

  return (
    <div>
      <ul>
        {compositores.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={handleClick}>Mostrar</button>
      <p>{mostrar}</p>
      <input
        type="text"
        value={borrar}
        onChange={(e) => setBorrar(e.target.value)}
      />
      <button onClick={handleBorrar}>Eliminar</button>
    </div>
  );
}

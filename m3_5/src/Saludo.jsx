export default function Saludo({ nombre, setNombre }) {
  return (
    <div>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Introduce tu nombre" />
      <h1>Hola {nombre}</h1>
    </div>
  );
}
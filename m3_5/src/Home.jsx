import { useNavigate } from "react-router-dom";

export default function Home({ nombre, setNombre }) {
  const navigate = useNavigate();

  return (
    <div>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Introduce tu nombre" />
      <button onClick={() => navigate("/saludo")}>Ingresa</button>
    </div>
  );
}
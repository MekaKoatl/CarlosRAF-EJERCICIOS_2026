import { Link } from "react-router-dom";

export default function Resultados({ num1, num2 }) {
  return (
    <div>
      <p>Suma: {num1 + num2}</p>
      <p>Resta: {num1 - num2}</p>
      <p>Multiplicación: {num1 * num2}</p>
      <p>División: {num2 !== 0 ? (num1 / num2).toFixed(2) : "∞"}</p>
      <p>Resto: {num2 !== 0 ? num1 % num2 : "∞"}</p>
      <Link to="/calculadora">Ocultar resultados</Link>
    </div>
  );
}
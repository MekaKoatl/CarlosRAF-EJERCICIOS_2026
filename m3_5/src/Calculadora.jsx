import { Link } from "react-router-dom";

export default function Calculadora({ num1, setNum1, num2, setNum2 }) {
  return (
    <div>
      <div>
        <button onClick={() => setNum1(num1 - 1)}>-</button>
        <span> Número 1: {num1} </span>
        <button onClick={() => setNum1(num1 + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setNum2(num2 - 1)}>-</button>
        <span> Número 2: {num2} </span>
        <button onClick={() => setNum2(num2 + 1)}>+</button>
      </div>
      <Link to="/resultados">Ver resultados</Link>
      <br />
      <button onClick={() => { setNum1(0); setNum2(0); }}>Reset a 0</button>
    </div>
  );
}
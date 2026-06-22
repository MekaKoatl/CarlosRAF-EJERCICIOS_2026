import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Saludo from "./Saludo";
import Calculadora from "./Calculadora";
import Result from "./Result";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/saludo">Saludo</Link>
        <Link to="/calculadora">Calculadora</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home nombre={nombre} setNombre={setNombre} />} />
        <Route path="/saludo" element={<Saludo nombre={nombre} setNombre={setNombre} />} />
        <Route path="/calculadora" element={<Calculadora num1={num1} setNum1={setNum1} num2={num2} setNum2={setNum2} />} />
        <Route path="/resultados" element={<Result num1={num1} num2={num2} />} />
      </Routes>
    </BrowserRouter>
  );
}
import { useState, useEffect } from "react";

export default function StarWars() {
  const [planetas, setPlanetas] = useState([]);
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://swapi.info/api/planets")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // revisa en consola la estructura real
        setPlanetas(Array.isArray(data) ? data : data.results);
      });
  }, []);

  function handleChange(e) {
    const planeta = planetas.find((p) => p.name === e.target.value);
    if (!planeta) return;

    Promise.all(
      planeta.residents.map((url) => fetch(url).then((r) => r.json())),
    ).then((data) => setPersonajes(data));
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Selecciona un planeta</option>
        {planetas.map((p) => (
          <option key={p.name} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>

      <div className="personajes">
        {personajes.map((p) => (
          <div className="personaje" key={p.name}>
            <p>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

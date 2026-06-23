import { useState, useEffect } from "react";

function PokemonCard({ url, nombre }) {
  let [imagen, setImagen] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImagen(data.sprites.front_default));
  }, [url]);

  return (
    <div className="personaje">
      {imagen && <img src={imagen} alt={nombre} />}
      <p>{nombre}</p>
    </div>
  );
}

export default function Pokemon() {
  let [tipos, setTipos] = useState([]);
  let [tipoSeleccionado, setTipoSeleccionado] = useState("");
  let [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((res) => res.json())
      .then((data) => setTipos(data.results));
  }, []);

  useEffect(() => {
    if (!tipoSeleccionado) return;
    fetch(`https://pokeapi.co/api/v2/type/${tipoSeleccionado}`)
      .then((res) => res.json())
      .then((data) => {
        let lista = data.pokemon.map((p) => p.pokemon);
        let aleatorios = lista.sort(() => Math.random() - 0.5).slice(0, 3);
        setPokemons(aleatorios);
      });
  }, [tipoSeleccionado]);

  return (
    <div>
      <select onChange={(e) => setTipoSeleccionado(e.target.value)} value={tipoSeleccionado}>
        <option value="">Selecciona un tipo</option>
        {tipos.map((t) => (
          <option key={t.name} value={t.name}>{t.name}</option>
        ))}
      </select>

      <div className="personajes">
        {pokemons.map((p) => (
          <PokemonCard key={p.name} url={p.url} nombre={p.name} />
        ))}
      </div>
    </div>
  );
}
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RicknMorty from "./RicknMorty"; 
import Pokemon from "./Pokemon";
import StarWars from "./Starwars";
// import Api4 from "./Api4";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/rickandmorty">Rick & Morty</Link>
        <Link to="/pokemon">Pokemon</Link>
        <Link to="/starwars">Starwars</Link>
        <Link to="/api4">Api 4</Link>
      </nav>
      <Routes>
        <Route path="/rickandmorty" element={<RicknMorty />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/starwars" element={<StarWars />} />
        {/* <Route path="/api4" element={<Api4 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
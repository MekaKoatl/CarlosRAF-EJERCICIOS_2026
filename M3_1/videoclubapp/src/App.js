import "./App.css";
import { videoclub } from "./videoclub";
import { MovieList } from "./List.js";

function App() {
  return <MovieList peliculas={videoclub.peliculas} />;
}

export default App;
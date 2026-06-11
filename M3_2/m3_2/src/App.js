import { EventCard } from "./EventCard";
import { Lista } from "./Lista";
import { Coche } from "./Coche";
import { Contador } from "./Contador";
import { Nombres } from "./Nombres";
import { useState } from "react";
import { Header } from "./Header";
import { libreria } from "./libreria";
import { LibroList } from "./LibroList";
import { Footer } from "./Footer";
import "./App.css";

const evento = {
  nombre: "Salsa dance party",
  fecha: "24/07/2020",
  hora: "16:00",
  lugar: {
    direccion: "Done Bikendi Kalea, 2",
    ciudad: "Bilbao",
  },
};

function App() {
  const [usuario, setUsuario] = useState(libreria.usuario);
  function toggleVip() {
    setUsuario({ ...usuario, vip: !usuario.vip });
  }
  return (
    <div>
      <Header usuario={usuario} onToggleVip={toggleVip} />
      <EventCard evento={evento} />
      <Lista />
      <Coche color="Rojo" />
      <Coche color="Azul" />
      <LibroList libros={libreria.libros} />
      <Coche color="Negro" />
      <Coche color="Blanco" />
      <Contador />
      <Nombres />
      <Footer libros={libreria.libros} />
    </div>
  );
}

export default App;

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
import Gato from "./Gato";
import "./App.css";

let evento = {
  nombre: "Salsa dance party",
  fecha: "24/07/2020",
  hora: "16:00",
  lugar: {
    direccion: "Done Bikendi Kalea, 2",
    ciudad: "Bilbao",
  },
};

function App() {
  let [usuario, setUsuario] = useState(libreria.usuario);
  let [muelle, setMuelle] = useState({
    nombre: "Puerto deportivo",
    barcos: [
      { nombre: "bar quito", eslora: "5m", tripulantes: 2 },
      { nombre: "imperioso", eslora: "12m", tripulantes: 3 },
    ],
    contacto: { telefono: "94463827" },
  });

  function toggleVip() {
    setUsuario({ ...usuario, vip: !usuario.vip });
  }

  function añadirTripulante(index) {
    let nuevosBarcos = muelle.barcos.map((barco, i) =>
      i === index ? { ...barco, tripulantes: barco.tripulantes + 1 } : barco
    );
    setMuelle({ ...muelle, barcos: nuevosBarcos });
  }
  return (
  <div>
    <Header usuario={usuario} onToggleVip={toggleVip} muelle={muelle} />
    <EventCard evento={evento} />
    <Lista muelle={muelle} onAñadir={añadirTripulante} />
    <Coche color="Rojo" />
    <Coche color="Azul" />
    <Coche color="Negro" />
    <Coche color="Blanco" />
    <Nombres />
    <Contador />
    <LibroList libros={libreria.libros} />
    <Gato />
    <Footer libros={libreria.libros} muelle={muelle}/>
  </div>
);
}

export default App;

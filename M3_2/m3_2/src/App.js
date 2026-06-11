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

let evento = {
  nombre: "Salsa dance party",
  fecha: "24/07/2020",
  hora: "16:00",
  lugar: {
    direccion: "Done Bikendi Kalea, 2",
    ciudad: "Bilbao",
  },
};

let muelle = {
  nombre: "Puerto deportivo",
  barcos: [
    {
      nombre: "bar quito",
      eslora: "5m",
      tripulantes: 2,
    },
    {
      nombre: "imperioso",
      eslora: "12m",
      tripulantes: 3,
    },
  ],

  contacto: {
    telefono: "94463827",
  },
};

function App() {
  let [usuario, setUsuario] = useState(libreria.usuario);

  function toggleVip() {
    setUsuario({ ...usuario, vip: !usuario.vip });
  }

  return (
    <div>
      <Header usuario={usuario} onToggleVip={toggleVip} muelle={muelle}/>
      <EventCard evento={evento} />
      <hr />
      <br />
      <Lista muelle={muelle}/>
      <br />
      <hr />
      <br />
      <Coche color="Rojo" />
      <br />
      <Coche color="Azul" />
      <br />
      <Coche color="Negro" />
      <br />
      <Coche color="Blanco" />
      <br />
      <hr />
      <br />
      <Nombres />
      <br />
      <hr />
      <br />
      <Contador />
      <br />
      <hr />
      <br />
      <LibroList libros={libreria.libros} />
      <br />

      <Footer libros={libreria.libros} />
    </div>
  );
}

export default App;

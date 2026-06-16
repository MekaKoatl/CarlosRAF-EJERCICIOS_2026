import { Link } from 'react-router-dom';

let equipo = [
  { id: 1, nombre: "Carlos", posicion: "Base"},
  { id: 2, nombre: "Luka", posicion: "Escolta"},
  { id: 3, nombre: "Sara", posicion: "Alero"},
  { id: 4, nombre: "Kamilo", posicion: "Delantero"},
  { id: 5, nombre: "Karla", posicion: "Portero"},
];


export function Equipo() {
  return (
    <div>
      <h2>Equipo</h2>
      {equipo.map((j) => (
        <div key={j.id}>
          <p>#{j.dorsal} {j.nombre} — {j.posicion}</p>
        </div>
      ))}
    </div>
  );
}


export default Equipo;
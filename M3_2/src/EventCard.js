export function EventCard({ evento }) {
  return (
    <div className="EventCard">
      <h2>{evento.nombre}</h2>
      <p>{evento.fecha} — {evento.hora}</p>
      <p>{evento.lugar.direccion}, {evento.lugar.ciudad}</p>
    </div>
  );
}
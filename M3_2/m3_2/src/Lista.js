export function Lista({ muelle }) {
  const items = ["Manzana", "Plátano", "Naranja"];

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <br />
      <hr />
      <br />
      <ul>
        {muelle.barcos.map((barco, index) => (
          <li key={index}>
            {barco.nombre} — {barco.eslora} — {barco.tripulantes} tripulantes
          </li>
        ))}
      </ul>
    </div>
  );
}

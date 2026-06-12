export function Lista({ muelle, onAñadir }) {
  let items = ["Manzana", "Plátano", "Naranja"];

  return (
    <div className="Lista">
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
            <button className="buttonli" onClick={() => onAñadir(index)}>+1</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
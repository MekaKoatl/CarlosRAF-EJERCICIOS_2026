export function Nombres() {
  const nombres = [
    "Carlos",
    "Luka",
    "Cris",
    "Kamilo",
    "Karla",
    "Candela",
    "Salma",
  ];

  return (
    <ul>
      {nombres.map((nombre, index) => (
        <li key={index}>{nombre}</li>
      ))}
    </ul>
  );
}

export default Nombres;

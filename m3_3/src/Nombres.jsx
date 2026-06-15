export function Nombres() {
  let nombres = [
    "Carlos",
    "Luka",
    "Cris",
    "Kamilo",
    "Karla",
    "Candela",
    "Salma",
  ];

  return (
    <>
      <ul>
        {nombres.map(index => (
            <li key={index}></li>
        ))}
      </ul>
    </>
  );
}

export default Nombres;

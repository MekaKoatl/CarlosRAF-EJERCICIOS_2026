export function Lista() {
  const items = ["Manzana", "Plátano", "Naranja"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
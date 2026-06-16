export function Perros() {
  const fotos = [
    "https://dogdog.mx/wp-content/uploads/2015/08/memes_perros_02.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqK0-kmoEYnylOwtKGenQ3BOiVaTFauibXfObN3coNA&s",
    "https://media.tenor.com/wsteJfd__v0AAAAe/perro.png",
    "https://dogdog.mx/wp-content/uploads/2015/08/memes_perros_01.jpg",
  ];

  return (
    <div>
      <h2>Perros</h2>
      {fotos.map((foto, index) => (
        <img key={index} src={foto} alt="perro" width={200} />
      ))}
    </div>
  );
}

export default Perros;
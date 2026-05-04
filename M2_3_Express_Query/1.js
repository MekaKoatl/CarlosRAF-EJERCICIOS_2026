const express = require("express");
const app = express();


const animales = [
  { nombre: 'Rex', edad: 3, tipo: 'T.Mex' },
  { nombre: 'Mari', edad: 5, tipo: 'Ocelote' },
  { nombre: 'Paco', edad: 1, tipo: 'Perro' },
  { nombre: 'Nemo', edad: 2, tipo: 'Pez Payaso' },
  { nombre: 'Toño', edad: 4, tipo: 'Toro' }
];

app.get('/', (req, res) => {
  const lista = animales.map(a => 
    `<li>Nombre: ${a.nombre} // Especie: ${a.tipo} // Edad: ${a.edad} años</li>`
  ).join('');

  res.send(`<ul>${lista}</ul>`);
});

app.get('/sumar-animal', (req, res) => {
  const { nombre, tipo, edad } = req.query;
  
  const nuevoAnimal = { nombre, tipo, edad: Number(edad) };
  animales.push(nuevoAnimal);
  
  res.send(`Animal añadido: ${nombre}`);
});

app.get('/dejar-animal', (req, res) => {
  res.send(`
    <form action="/sumar-animal" method="GET">
      <input type="text" name="nombre" placeholder="Nombre" />
      <input type="text" name="tipo" placeholder="Tipo" />
      <input type="number" name="edad" placeholder="Edad" />
      <button type="submit">Añadir animal</button>
    </form>
  `);
});

// Iniciar servidor
app.listen(3000);
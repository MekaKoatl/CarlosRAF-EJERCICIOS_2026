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

// Iniciar servidor
app.listen(3000);
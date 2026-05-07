import express from "express";
import cors from "cors";

const app = express();

app.use(express.static("../app"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const persona = [
  { nombre: "Carlos", apellido: "V", edad: 26, nacionalidad: "MXN" },
  { nombre: "Luca", apellido: "Luko", edad: 21, nacionalidad: "ESP" },
  { nombre: "Cris", apellido: "Kros", edad: 21, nacionalidad: "ESP" },
  { nombre: "Karla", apellido: "Max", edad: 29, nacionalidad: "RD" },
  { nombre: "Salma", apellido: "Amlas", edad: 22, nacionalidad: "ESP" },
];

app.get('/personas', (req, res) => {
  res.json(persona);
});

app.post('/NUEVpersonas', (req, res) => {
  const nPersona = req.body;
  persona.push(nPersona);
  res.json(persona);
});

app.put('/MODpersonas', (req, res) => {
  const { nombre, apellido, edad, nacionalidad } = req.body;
  const index = persona.findIndex(p => p.nombre === nombre);

  

  persona[index] = { nombre, apellido, edad, nacionalidad };
  res.json(persona);
});

app.delete('/personas/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  const index = persona.findIndex(p => p.nombre === nombre);

  

  persona.splice(index, 1);
  res.json(persona);
});

app.listen(process.env.PORT || 3000);
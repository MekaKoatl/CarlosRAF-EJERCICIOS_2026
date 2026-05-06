import express from "express";
import cors from "cors";

const app = express();

app.use(express.static("public"));
app.use(cors());

//----------------------
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//----------------------

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

app.post('/MODpersonas', (req, res) => {
  const mPersona = req.body;
  persona.push(mPersona);
  res.json(persona);
});


app.listen(process.env.PORT || 3000);
const express = require('express');
const app = express();

const alumnos = ["Cris", "Carlos", "Luca", "Salma", "Kamilo", "Karla"];

const profesores = []

const miembros = {
    Alumnos : alumnos,
    Profesores: ''
}

app.get('/miembros/prof/:valor', (req, res) => {
  miembros.Profesores = req.params.valor;
  res.send(miembros);
});



app.listen(3000)
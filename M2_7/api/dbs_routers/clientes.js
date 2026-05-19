import { Router } from "express";

const router = Router();

// POST /api/clientes/registrar
router.post("/registrar", async (req, res) => {
  const { nombre, apellido, dni } = req.body;

  if (!nombre || !apellido || !dni)
    return res.status(400).send({ message: "Faltan datos obligatorios" });

  const db = req.app.locals.db;

  // Comprobar si el cliente ya existe
  const existe = await db.collection("clientes").findOne({ dni });
  if (existe)
    return res.status(409).send({ message: `Cliente con DNI ${dni} ya está registrado` });

  await db.collection("clientes").insertOne({ nombre, apellido, dni });
  res.status(201).send({ message: "Cliente registrado correctamente" });
});

// PUT /api/clientes/editar/:dni
router.put("/editar/:dni", async (req, res) => {
  const dni = req.params.dni;
  const { nombre, apellido } = req.body;

  if (!nombre && !apellido)
    return res.status(400).send({ message: "Indica al menos nombre o apellido a modificar" });

  const db = req.app.locals.db;

  const existe = await db.collection("clientes").findOne({ dni });
  if (!existe)
    return res.status(404).send({ message: `Cliente con DNI ${dni} no encontrado` });

  const campos = {};
  if (nombre) campos.nombre = nombre;
  if (apellido) campos.apellido = apellido;

  await db.collection("clientes").updateOne({ dni }, { $set: campos });
  res.send({ message: `Cliente ${dni} actualizado correctamente` });
});

export default router;
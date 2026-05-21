import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  const clients = await req.app.locals.db
    .collection("clientes")
    .find()
    .toArray();
  res.send({ data: clients });
});


router.post("/registrar", async (req, res) => {
  const { nombre, apellido, numdoc } = req.body;

  if (!nombre || !apellido || !numdoc)
    return res.status(400).send({ message: "Faltan datos obligatorios" });

  const db = req.app.locals.db;

  // Comprobar si el cliente ya existe
  const existe = await db.collection("clientes").findOne({ numdoc });
  if (existe)
    return res
      .status(409)
      .send({ message: `Cliente con identifiacación (DNI, INE, Pasaporte) ${numdoc} ya está registrado` });

  await db.collection("clientes").insertOne({ nombre, apellido, numdoc });
  res.status(201).send({ message: "Cliente registrado correctamente" });
});


router.put("/editar/:numdoc", async (req, res) => {
  const numdoc = req.params.numdoc;
  const { nombre, apellido } = req.body;

  if (!nombre && !apellido)
    return res
      .status(400)
      .send({ message: "Indica al menos nombre o apellido a modificar" });

  const db = req.app.locals.db;

  const existe = await db.collection("clientes").findOne({ numdoc });
  if (!existe)
    return res
      .status(404)
      .send({ message: `Cliente con numdoc ${numdoc} no encontrado` });

  const campos = {};
  if (nombre) campos.nombre = nombre;
  if (apellido) campos.apellido = apellido;

  await db.collection("clientes").updateOne({ numdoc }, { $set: campos });
  res.send({ message: `Cliente ${numdoc} actualizado correctamente` });
});



export default router;

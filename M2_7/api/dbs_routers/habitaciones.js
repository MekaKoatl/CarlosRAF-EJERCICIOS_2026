import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  const habitaciones = await req.app.locals.db
    .collection("habitaciones")
    .find()
    .toArray();
  res.send({ data: habitaciones });
});


router.post("/insertar", async (req, res) => {
  const db = req.app.locals.db;

  const yaExisten = await db.collection("habitaciones").countDocuments();
  if (yaExisten > 0)
    return res.status(409).send({ message: "Las habitaciones ya están insertadas" });

  const habitaciones = [1, 2, 3, 4, 5, 6, 7, 8].map(n => ({
    roomnum: n,
    estado: "disponible"
  }));

  await db.collection("habitaciones").insertMany(habitaciones);
  res.status(201).send({ message: "8 habitaciones insertadas correctamente" });
});


router.post("/checkout", async (req, res) => {
  const { roomnum } = req.body;

  if (!roomnum)
    return res.status(400).send({ message: "Indica el número de habitación" });

  const db = req.app.locals.db;

  const habitacion = await db.collection("habitaciones").findOne({ roomnum });
  if (!habitacion)
    return res.status(404).send({ message: `Habitación ${roomnum} no encontrada` });

  if (habitacion.estado === "disponible")
    return res.status(400).send({ message: `Habitación ${roomnum} ya está disponible` });

  await db.collection("habitaciones").updateOne(
    { roomnum },
    { $set: { estado: "disponible" } }
  );

  res.send({ message: `Checkout de habitación ${roomnum} realizado correctamente` });
});

export default router;
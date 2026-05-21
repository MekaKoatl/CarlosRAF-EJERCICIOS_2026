import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  const reservas = await req.app.locals.db
    .collection("reservas")
    .find()
    .toArray();
  res.send({ data: reservas });
});

router.post("/checkin", async (req, res) => {
  const data = req.body;
  console.log(data);
  const clientFound = await req.app.locals.db
    .collection("clientes")
    .findOne({ numdoc: data.numdoc });
  const roomFound = await req.app.locals.db
    .collection("habitaciones")
    .findOne({ roomnum: data.roomnum });
  let response;

  if (!clientFound && roomFound.estado == "ocupado") {
    response = "Cliente no registrado y la habitación no esta disponible";
  }
  if (clientFound && roomFound.estado == "ocupado") {
    response = "Existes, pero la habitación que buscas esta ocupada";
  }

  if (!clientFound && roomFound.estado == "disponible") {
    response = "El cliente no existe, pero la habitación esta disponible";
  }
  if (clientFound && roomFound.estado == "disponible") {
    const dataNewCheckin = await req.app.locals.db
      .collection("reservas")
      .insertOne({
        client: data.numdoc,
        habitacion: data.roomnum,
        checkin: data.checkin,
        checkout: data.checkout,
      });

    const dataRoom = await req.app.locals.db
      .collection("habitaciones")
      .updateOne(
        { roomnum: data.roomnum },
        { $set: { estado: "ocupado" } },
      );

    response = "El cliente esta registrado, y habitación disponible";
  }

  res.send({ data: response });
});

export default router;

import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import clientesRouter from "./dbs_routers/clientes.js"
import habitacionesRouter from "./dbs_routers/habitaciones.js";
import reservasRouter from "./dbs_routers/reservas.js";

// import pruebauser from './pruebauser.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/clientes", clientesRouter);
app.use("/api/habitaciones", habitacionesRouter);
app.use("/api/reservas", reservasRouter);
// app.use(pruebauser)

const PORT = process.env.PORT || 3000;
const uri = "mongodb://admin:admin123@127.0.0.1:27017";

let db;

async function start() {
  try {
    const client = await MongoClient.connect(uri);
    db = client.db("hotel");
    app.locals.db = db;
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Mongo error:", err);
  }
}
// const client = await MongoClient.connect(uri)
// app.locals.db = client.db('store')
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

start();

app.get('', (req, res) => {
  res.send('Carlos dice Hola')
})


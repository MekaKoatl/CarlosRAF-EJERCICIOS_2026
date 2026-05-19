import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import clientesRouter from "./routers/clientes.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const uri = "mongodb://admin:admin123@127.0.0.1:27017";

let db;

async function start() {
  try {
    const client = await MongoClient.connect(uri);
    db = client.db("hotel");
    app.locals.db = db; // pasamos db a los routers via app.locals
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Mongo error:", err);
  }
}
start();

app.use("/api/clientes", clientesRouter);
let express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 3000;
const uri = `mongodb://admin:admin123@127.0.0.1:27017`;
let db, db2, db3;

async function start() {
  try {
    const client = await MongoClient.connect(uri);
    db = client.db("store");
    db2 = client.db("libros");
    db3 = client.db("TV");
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Mongo error:", err);
  }
}
start();

// SERIES
app.get("/api/series", async (req, res) => {
  let series = await db3.collection("series").find().toArray();
  res.send(series);
});

app.get("/api/serie", async (req, res) => {
  let titulo = req.query.titulo;
  let serie = await db3.collection("series").findOne({ titulo });
  if (!serie) return res.status(404).send({ message: "Serie no encontrada" });
  res.send(serie);
});

// LIBROS
app.get("/api/libros", async (req, res) => {
  let libros = await db2.collection("libros").find().toArray();
  res.send(libros);
});

app.get("/api/libros/:titulo", async (req, res) => {
  let titulo = req.params.titulo;
  let libros = await db2.collection("libros").find({ titulo }).toArray();
  res.send({ data: libros });
});

app.post("/api/nuevoLibro/:titulo/:estatus", async (req, res) => {
  let { titulo, estatus } = req.params;
  await db2.collection("libros").insertOne({ titulo, estatus });
  res.send({ message: "Libro añadido" });
});

app.put("/api/editarLibro/:titulo/:estatus", async (req, res) => {
  let { titulo, estatus } = req.params;
  await db2.collection("libros").updateOne({ titulo }, { $set: { estatus } });
  res.send({ message: `Estatus de "${titulo}" actualizado a "${estatus}"` });
});

app.delete("/api/borrarLibro/:titulo", async (req, res) => {
  let titulo = req.params.titulo;
  await db2.collection("libros").deleteOne({ titulo });
  res.send({ message: `Libro "${titulo}" borrado` });
});

// MESAS
app.get("/mesas", async (req, res) => {
  let mesas = await db.collection("tables").find().toArray();
  res.send(mesas);
});

app.post("/api/annadir", async (req, res) => {
  let mesa = req.body;
  await db.collection("tables").insertOne(mesa);
  res.send({ message: "Mesa añadida", mesa });
});

app.put("/api/modificar/:color", async (req, res) => {
  let color = req.params.color;
  const response = await db.collection("tables").updateMany({ color }, { $set: { color: "granate" } });
  res.send(response);
});

app.delete("/api/borrar/:patas", async (req, res) => {
  let patas = parseInt(req.params.patas);
  const response = await db.collection("tables").deleteMany({ patas });
  res.send(response);
});
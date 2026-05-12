let express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const PORT = process.env.PORT || 3000;
const uri = `mongodb://admin:admin123@127.0.0.1:27017`;
const { MongoClient } = require("mongodb");
let db;

///Conector Mongo
async function start() {
  try {
    const client = await MongoClient.connect(uri);
    db = client.db("store");
    db2 = client.db("libros");
    console.log("Connected to MongoDB");

    app.listen(3000, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Mongo error:", err);
  }
}

start();

function showtables() {}

app.get("/api/libros", async (req, res) => {
  let libros = await db2.collection("libros").find().toArray();
  res.send(libros);
});

app.get("/api/libros/:titulo", async (req, res) => {
  let titulo = req.params.titulo;
  let libros = await db2
    .collection("libros")
    .find({ titulo: titulo })
    .toArray();
  res.send(libros);
});

app.post("/api/nuevoLibro/:titulo/:estatus", async (req, res) => {
  let titulo = req.params.titulo;
  let estatus = req.params.estatus;
  let libros = await db2
    .collection("libros")
    .insertOne({ titulo: titulo, estatus: estatus });
  res.send({ message: "Libro añadido", libros });
});

app.put("/api/editarLibro/:titulo/:estatus", async (req, res) => {
  let titulo = req.params.titulo;
  let estatus = req.params.estatus;
  let libros = await db2
    .collection("libros")
    .find({ titulo: titulo })
    .toArray();
  await db.collection("libros").updateOne({titulo}, { $set: { estatus: estatus } });
   res.send({ message: "Estatus de libro modificado", libros });
});

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
  await db.collection("tables").updateMany({}, { $set: { color: color } });
  res.send(response);
});

app.put("/api/borrar/:patas", async (req, res) => {
  let patas = parseInt(req.params.patas);
  const response = await db.collection("tables").deleteMany({ patas: patas });
  res.send(response);
});

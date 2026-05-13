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
  res.send({data: libros});
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
  const response = await db2
    .collection("libros")
    .updateOne(
      { titulo: titulo },
      { $set: { estatus: estatus } }
    );
  res.send({ message: `Estatus de "${titulo}" actualizado a "${estatus}"`, data: response });
});

app.delete("/api/borrarLibro/:titulo", async (req, res) => {
  let titulo = req.params.titulo;
  const response = await db2.collection("libros").deleteOne({ titulo: titulo });
  res.send({ message: `Libro "${titulo}" borrado`, data: response });
});



///////////////////////////////////////////////////////////////////////////////////////


app.get("/mesas", async (req, res) => {
  let mesas = await db.coleccion("tables").find().toArray();
  res.send(mesas);
});

app.post("/api/annadir", async (req, res) => {
  let mesa = req.body;
  await db.collection("tables").insertOne(mesa);
  res.send({ message: "Mesa añadida", mesa });
});

app.put("/api/modificar/:color", async (req, res) => {
  let color = req.params.color;
  const response = await db
    .collection("tables")
    .updateMany({ color: color }, { $set: { color: "granate" } });
  res.send(response);
});

app.delete("/api/borrar/:patas", async (req, res) => {
  let patas = parseInt(req.params.patas);
  const response =  db.collection("tables").deleteMany({ patas: patas });
  res.send(response);
});

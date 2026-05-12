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
    console.log("Connected to MongoDB");

    app.listen(3000, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Mongo error:", err);
  }
}

start();

app.get("/mesas", async (req, res) => {
  let mesas = await db.collection("tables").find().toArray();
  res.send(mesas);
});

app.post("/api/annadir", async (req, res) => {
  let mesa = req.body;
  await db.collection("tables").insertOne(mesa);
  res.send({ message: "Mesa añadida", mesa });
});
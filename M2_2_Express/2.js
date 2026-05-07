const express = require("express");
const app = express();

app.get("/random/:max", (req, res) => {
  const max = parseInt(req.params.max);


  const randomNumber = Math.floor(Math.random() * max) + 1;

  res.send({
    max,
    random: randomNumber,
  });
});

// Iniciar servidor
app.listen(3000);

const express = require("express")

let app = express ()

app.get("/", (req, res) =>{
    res.send("Hola Mundo. Desde Express")
})

app.listen(3000)
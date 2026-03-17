const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.get("/", (req, res) => {
  // __dirname es una variable de Node que te da la ruta de la carpeta actual.
  // path.join une esa ruta con el nombre de tu archivo de forma segura.
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

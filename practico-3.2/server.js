// server.js
const express = require("express");
const cors = require("cors"); // Para permitir peticiones desde el frontend
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Para que el back entienda JSON en el body

// "Base de datos" volátil (se borra si reiniciás el servidor)
let listaAlumnos = [];

// RUTA 1: Obtener todos los alumnos (GET)
app.get("/alumnos", (req, res) => {
  res.json(listaAlumnos);
});

// RUTA 2: Guardar un nuevo alumno (POST)
app.post("/alumnos", (req, res) => {
  const nuevoAlumno = req.body;

  // Validamos un poquito
  if (!nuevoAlumno.nombre || !nuevoAlumno.nota) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  listaAlumnos.push(nuevoAlumno);
  console.log("Alumno guardado:", nuevoAlumno);

  res
    .status(201)
    .json({ mensaje: "Alumno agregado con éxito", data: nuevoAlumno });
});

// RUTA 3: Limpiar lista (DELETE) - Opcional
app.delete("/alumnos", (req, res) => {
  listaAlumnos = [];
  res.json({ mensaje: "Lista vaciada" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

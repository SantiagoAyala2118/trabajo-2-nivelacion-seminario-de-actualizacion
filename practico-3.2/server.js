// server.js
import express from "express";
import cors from "cors"; // IMPORTANTE: Agregué "cors" aquí

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let listaAlumnos = []; // Memoria temporal

app.get("/alumnos", (req, res) => {
  res.json(listaAlumnos);
});

app.post("/alumnos", (req, res) => {
  const { nombre, edad, nota } = req.body;

  if (!nombre || nota === undefined) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  const nuevoAlumno = { nombre, edad, nota };
  listaAlumnos.push(nuevoAlumno);

  console.log("Nuevo alumno recibido:", nuevoAlumno);
  res.status(201).json(nuevoAlumno);
});

app.listen(PORT, () => {
  console.log(`Servidor de Santiago corriendo en http://localhost:${PORT}`);
});

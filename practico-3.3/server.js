import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Estructura: { "id-unico-maquina": [lista_alumnos], "otro-id": [...] }
let dbUsuarios = {};

// GET: Ahora pedimos el userId por parámetro de consulta (query)
app.get("/alumnos", (req, res) => {
  const userId = req.query.userId;
  if (!userId) return res.status(400).json({ error: "Falta ID de usuario" });

  // Si el usuario no existe todavía, le devolvemos una lista vacía
  const alumnos = dbUsuarios[userId] || [];
  res.json(alumnos);
});

// POST: Guardamos el alumno asociado a un ID
app.post("/alumnos", (req, res) => {
  const { userId, nombre, edad, nota } = req.body;

  if (!userId || !nombre)
    return res.status(400).json({ error: "Datos incompletos" });

  // Si es la primera vez de este usuario, inicializamos su lista
  if (!dbUsuarios[userId]) {
    dbUsuarios[userId] = [];
  }

  const nuevoAlumno = { nombre, edad, nota };
  dbUsuarios[userId].push(nuevoAlumno);

  console.log(`Guardado para usuario ${userId}:`, nuevoAlumno);
  res.status(201).json(nuevoAlumno);
});

app.listen(PORT, "0.0.0.0", () => {
  // "0.0.0.0" permite conexiones externas en la red
  console.log(`Servidor multi-usuario en http://localhost:${PORT}`);
  console.log(`Para que tus compas entren, dales tu IP local`);
});

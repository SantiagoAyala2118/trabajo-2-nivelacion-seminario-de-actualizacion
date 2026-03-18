import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs"; // 👈 NUEVO: módulo de archivos
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// 👇 NUEVO: Ruta del archivo donde se guardan los datos
const DB_PATH = path.join(__dirname, "db.json");

// 👇 NUEVO: Función para LEER los datos del archivo
function leerDB() {
  if (!fs.existsSync(DB_PATH)) return {}; // Si el archivo no existe, devuelve vacío
  const contenido = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(contenido);
}

// 👇 NUEVO: Función para GUARDAR los datos en el archivo
function guardarDB(datos) {
  fs.writeFileSync(DB_PATH, JSON.stringify(datos, null, 2));
}

// ❌ ELIMINADO: let dbUsuarios = {}
//    Ya no usamos una variable en memoria, leemos/escribimos el archivo directamente

app.get("/alumnos", (req, res) => {
  const userId = req.query.userId;
  const dbUsuarios = leerDB(); // 👈 Leemos del archivo cada vez
  const alumnos = dbUsuarios[userId] || [];
  res.json(alumnos);
});

app.post("/alumnos", (req, res) => {
  const { userId, nombre, edad, nota } = req.body;
  if (!userId || !nombre)
    return res.status(400).json({ error: "Datos incompletos" });

  const dbUsuarios = leerDB(); // 👈 Leemos el estado actual

  if (!dbUsuarios[userId]) {
    dbUsuarios[userId] = [];
  }

  const nuevoAlumno = { nombre, edad, nota };
  dbUsuarios[userId].push(nuevoAlumno);

  guardarDB(dbUsuarios); // 👈 Guardamos el estado actualizado

  console.log(`Guardado para usuario ${userId}:`, nuevoAlumno);
  res.status(201).json(nuevoAlumno);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor multi-usuario en http://localhost:${PORT}`);
  console.log(
    `Para que tus compas entren desde otra máquina, dales tu IP local (ej: http://192.168.1.100:${PORT})`,
  );
});

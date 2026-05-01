const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// Rutas de páginas
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "index.html"));
});

app.get("/diagnostico", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "diagnostico.html"));
});

app.get("/mantenimiento", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "mantenimiento.html"));
});

app.get("/guia", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "guia.html"));
});

app.get("/checklist", (req, res) => {
  res.sendFile(path.join(__dirname, "templates", "checklist.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

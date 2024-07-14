const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

// Configuración de la base de datos PostgreSQL
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'minecraft',
    database: 'ingresos',
    port: 5432
});

// Ruta para la consulta
app.get('/consulta', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM personas.usuarios;');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la consulta');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

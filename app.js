const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());

// Importar y usar las rutas
const router_usuario = require('./routers/router_usuario');

app.use('/usuarios', router_usuario);


// Iniciar el servidor
app.listen(5001, () => {
    console.log(`Servidor activo en http://127.0.0.1:5001`);
});

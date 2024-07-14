const { Client } = require('pg');

const conexion = new Client({
    host: 'localhost',
    user: 'postgres',
    password: 'minecraft',
    database: 'ingresos',
    port: 5432
});

conexion.connect((error) => {
    if (error) {
        console.error('Error de conexión a la base de datos: ' + error);
        return;
    }
    console.log('Conectado a la base de datos correctamente');
});

module.exports = conexion;

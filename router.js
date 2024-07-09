const express = require('express'); //invocamos express
const router=express.Router(); //modulo de enrutamiento, conecta todos los componentes
const conexion=require('./database/db');
const app = express(); //creamos la app

//invocamos enrutadores
const router_usuario = require('./routers/router_usuario');
const router_gastos = require('./routers/router_gastos');
const router_ingresos = require('./routers/router_ingresos');


//Exportamos el router para usarlo en la app
module.exports=router;
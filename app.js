//referenciamos a express para crear la conexion a la base de datos más rapido
const express = require('express');
const app = express(); //invocamos mediante su clase
app.set('view engine', 'ejs') //invocamos el motor de plantillas EJS mediante el método
app.use(express.urlencoded({extended:false}));
app.use(express(express.json));
//app.use('/',require('./router_usuario')); //referenciamos al enrutador

//app.use('/', require('./router')); //referenciamos enrutado principal

app.use('/',(require,response)=>{
    response.send('<h1>Activo el Server...<h1>'); //contenido de la web
    response.end;
});
app.listen(5001, ()=>{
    console.log(5001, 'Activo servidor desde http://127.0.0.1:5001')
})
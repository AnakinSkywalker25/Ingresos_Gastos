const pg=require('pg'); //referenciamos al modulo para la conexión a la base de datos
const conexion = pg.createConnection({
    host: 'localhost',
    user:'postgres',
    password:'1234',
    database:'Ingresos',
    port:'5432'
});
//ejecutamos la conexión
conexion.connect((error)=>{
    if(error){
        console.error('El error de conexión es:'+error);
        return
    }
    console.log('Conectado la BD de forma correcta...');
});
//Exportamos la conexión para poder usarla desde la app::
module.exports=conexion
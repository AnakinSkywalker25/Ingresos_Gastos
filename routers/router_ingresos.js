//referenciamos a express
const express=require('express'); //orm node
const router=express.router(); //modulo de enrutamiento, conecta todos los componentes
const conexion=require('../database/db');
router.get('/', (request, response)=>{
    conexion.query('SELECT * FROM dinero.ingresos', (error, results)=>{
        if(error){
            throw error; //muestra error por consola
        }else
        {
            response.render('index',{results:results}) //envía resultados de la consulta
        }   
    })
});

//Ruta para crear registros
router.get('/create', (request,response)=>{
    response.render('create');
});

//Agregar ruta para el script del crud.js y método save, antes de la exportación
const crud = require('../controllers/crud_ingresos');
router.post('/save', crud.save);

//editar
router.get('/edit', crud.edit);
/* router.get('/edit/:idusuario', (request, response)=>{
    const idusuario = request.params.id_usu;
    conexion.query('SELECT * FROM personas.usuarios where id_usu=?', [idusuario], (error, results)=>{
        if(error){
            throw error;
        }else{
            response.render('edit', {part:results[0]}); //envía resultados de la consulta
        }
    })
}); */

//ruta para eliminar
router.get('/delete', crud.delete);
/* router.get('/delete/:idusuario', (request, response)=>{
    const idusuario = request.params.id_usu;
    conexion.query('DELETE FROM personas.usuarios where id_usu=?', [idusuario], (error, results)=>{
        if(error){
            throw error;
        }else{
            response.redirect('/')
        }
    })
}); */

//ruta para actualizar
router.post('/update', crud.update);

//exportamos el enrutador para usarlo desde la app
module.exports=router_ingresos;
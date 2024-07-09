//enlazar datos desde el formulario
const { request } = require('express');
const conexion = require('../database/db');
exports.save = (request, response)=>{
    const usuario = request.body.usu_usu;
    const nombres = request.body.nom_usu;
    const apellidos = request.body.ape_usu;
    const estatus = request.body.est_usu
    //console.log(`La persona ${nombres} ${apellidos} tiene la cedula ${cedula}`);
    conexion.query('insert into personas.usuarios set ?',{usuario:usu_usu, nombres:nom_usu, apellidos:ape_usu, estatus:est_usu}, (error,results)=>{
        if(error){
            console.log(error)
        }else{
            response.redirect('/')
        }
    })
}
//agregamos metodo update to update data that comes from the form
exports.update = (request,response)=>{
    const idusuario=request.body.id_usu;
    const usuario = request.body.usu_usu;
    const nombres = request.body.nom_usu;
    const apellidos = request.body.ape_usu;
    const estatus = request.body.est_usu
    conexion.query('update personas.usuarios set ? where id_usu=?', [{usuario:usu_usu, nombres:nom_usu, apellidos:ape_usu, estatus:est_usu}, idusuario], (error,results)=>{
        if(error){
            console.log(error)
        }else{
            response.redirect('/')
        }
    })
}
//Método para eliminar
exports.delete = (request, response)=>{
    const idusuario = request.params.id_usu;
    conexion.query('DELETE FROM personas.usuarios where id_usu=?', [idusuario], (error, results)=>{
        if(error){
            throw error;
        }else{
            response.redirect('/')
        }
    })
};

//metodo para editar
exports.edit = (request, response)=>{
    const idusuario = request.params.id_usu;
    conexion.query('SELECT * FROM personas.usuarios where id_usu=?', [idusuario], (error, results)=>{
        if(error){
            throw error;
        }else{
            response.render('edit', {part:results[0]}); //envía resultados de la consulta
        }
    })
};
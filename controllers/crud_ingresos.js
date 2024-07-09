//enlazar datos desde el formulario
const { request } = require('express');
const conexion = require('../database/db');
exports.save = (request, response)=>{
    const idingreso=request.body.id_ing;
    const nombre = request.body.nom_ing;
    const descripcion = request.body.des_ing;
    const cantidad = request.body.can_ing;
    const fecha = request.body.fec_ing;
    const fky_usuario = request.body.fky_id_usu;
    const estatus = request.body.est_ing;
    //console.log(`La persona ${nombres} ${apellidos} tiene la cedula ${cedula}`);
    conexion.query('insert into dinero.ingresos set ?',{nombre:nom_ing, descripcion:des_ing, cantidad:can_ing, fecha:fec_ing, fky_usuario:fky_id_usu, estatus:est_ing}, (error,results)=>{
        if(error){
            console.log(error)
        }else{
            response.redirect('/')
        }
    })
}
//agregamos metodo update to update data that comes from the form
exports.update = (request,response)=>{
    const idingreso=request.body.id_ing;
    const nombre = request.body.nom_ing;
    const descripcion = request.body.des_ing;
    const cantidad = request.body.can_ing;
    const fecha = request.body.fec_ing;
    const fky_usuario = request.body.fky_id_usu;
    const estatus = request.body.est_ing;
    conexion.query('update dinero.ingresos set ? where id_ing=?', [{nombre:nom_ing, descripcion:des_ing, cantidad:can_ing, fecha:fec_ing, fky_usuario:fky_id_usu, estatus:est_ing}, idingreso], (error,results)=>{
        if(error){
            console.log(error)
        }else{
            response.redirect('/')
        }
    })
}
//Método para eliminar
exports.delete = (request, response)=>{
    const idingreso = request.params.id_ing;
    conexion.query('DELETE FROM dinero.ingresos where id_ing=?', [idingreso], (error, results)=>{
        if(error){
            throw error;
        }else{
            response.redirect('/')
        }
    })
};

//metodo para editar
exports.edit = (request, response)=>{
    const idingreso = request.params.id_ing;
    conexion.query('SELECT * FROM dinero.ingresos where id_ing=?', [idingreso], (error, results)=>{
        if(error){
            throw error;
        }else{
            response.render('edit', {part:results[0]}); //envía resultados de la consulta
        }
    })
};
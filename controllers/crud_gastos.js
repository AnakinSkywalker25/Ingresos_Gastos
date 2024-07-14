/* 
const { request } = require('express');
const conexion = require('../database/db');
exports.save = (request, response)=>{
    const idgasto=request.body.id_gas;
    const nombre = request.body.nom_gas;
    const descripcion = request.body.des_gas;
    const cantidad = request.body.can_gas;
    const fecha = request.body.fec_gas;
    const fky_usuario = request.body.fky_id_usu;
    const estatus = request.body.est_gas;
    conexion.query('insert into dinero.gastos set ?',{nombre:nom_gas, descripcion:des_gas, cantidad:can_gas, fecha:fec_gas, fky_usuario:fky_id_usu, estatus:est_gas}, (error,results)=>{
        if(error){
            console.log(error)
        }else{
            response.redirect('/')
        }
    })
}
exports.update = (request,response)=>{
    const idgasto=request.body.id_gas;
    const nombre = request.body.nom_gas;
    const descripcion = request.body.des_gas;
    const cantidad = request.body.can_gas;
    const fecha = request.body.fec_gas;
    const fky_usuario = request.body.fky_id_usu;
    const estatus = request.body.est_gas;
    conexion.query('update dinero.gastos set ? where id_gas=?', [{nombre:nom_gas, descripcion:des_gas, cantidad:can_gas, fecha:fec_gas, fky_usuario:fky_id_usu, estatus:est_gas}, idgasto], (error,results)=>{
        if(error){
            console.log(error)
        }else{
            response.redirect('/')
        }
    })
}
exports.delete = (request, response)=>{
    const idgasto = request.params.id_gas;
    conexion.query('DELETE FROM dinero.gastos where id_gas=?', [idgasto], (error, results)=>{
        if(error){
            throw error;
        }else{
            response.redirect('/')
        }
    })
};
exports.edit = (request, response)=>{
    const idgasto = request.params.id_gas;
    conexion.query('SELECT * FROM dinero.gastos where id_gas=?', [idgasto], (error, results)=>{
        if(error){
            throw error;
        }else{
            response.render('edit', {part:results[0]});
        }
    })
}; */
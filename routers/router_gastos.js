/* const express=require('express'); 
const router=express.router(); 
const conexion=require('../database/db');
router.get('/getGastos', (request, response)=>{
    conexion.query('SELECT * FROM dinero.gastos', (error, results)=>{
        if(error){
            throw error; 
        }else
        {
            console.log("Esta ruta esta funcionando")
        }   
    })
});

router.get('/create', (request,response)=>{
    response.render('create');
});

const crud = require('../controllers/crud_gastos');
router.post('/saveGasto', crud.save);
router.get('/editGasto', crud.edit);
router.get('/deleteGasto', crud.delete);
router.post('/updateGasto', crud.update);

module.exports=router_gastos; */
/* //referenciamos a express
const express=require('express'); 
const router=express.router(); 
const conexion=require('../database/db');
router.get('/', (request, response)=>{
    conexion.query('SELECT * FROM dinero.ingresos', (error, results)=>{
        if(error){
            throw error;
        }else
        {
            response.render('index',{results:results}) 
        }   
    })
});

router.get('/create', (request,response)=>{
    response.render('create');
});

const crud = require('../controllers/crud_ingresos');
router.post('/saveIngreso', crud.save);
router.get('/editIngreso', crud.edit);
router.get('/deleteIngreso', crud.delete);
router.post('/updateIngreso', crud.update);

module.exports=router_ingresos; */
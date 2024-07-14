const express = require('express');
const router = express.Router();
const conexion = require('../database/db');
const crud = require('../controllers/crud_usuario');

router.get('/users', async (req, res) => {
    try {
      const result = await conexion.query('SELECT * FROM personas.usuarios;');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error en la consulta');
    }
  });

router.post('/saveUser', crud.save);
router.get('/editUser/:id_usu', crud.edit);
router.get('/deleteUser/:id_usu', crud.delete);
router.post('/updateUser/:id_usu', crud.update);

module.exports = router;

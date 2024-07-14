const { query } = require('express');
const conexion = require('../database/db');

exports.save = (request, response) => {
    var { usu_usu, nom_usu, ape_usu, est_usu } = request.body;
    const query= 'INSERT INTO personas.usuarios (usu_usu, nom_usu, ape_usu, est_usu) VALUES ($1, $2, $3, $4);';
        
    conexion.query(query,[usu_usu,nom_usu,ape_usu,est_usu],(error, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Usuario Agregado")

            response.redirect('/');
        }
    });
};

exports.update = (request, response) => {
    const id_usu = request.params.id_usu;
    const { usu_usu, nom_usu, ape_usu, est_usu } = request.body;
    const query=`UPDATE personas.usuarios SET usu_usu = $1, nom_usu = $2, ape_usu = $3, est_usu = $4 WHERE id_usu =${id_usu}`
    conexion.query(query, [usu_usu, nom_usu, ape_usu, est_usu], (error, results) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Usuario Modificado Correctamente")
            response.redirect('/');
        }
    });
};

exports.delete = (request, response) => {
    const id_usu = request.params.id_usu;
    const query=`DELETE FROM personas.usuarios where id_usu =${id_usu}`
    conexion.query(query, (error, results) => {
        if (error) {
            throw error;
        } else {
            console.log("Usuario eliminado correctamente")
            response.redirect('/');
        }
    });
};

exports.edit = (request, response) => {
    const id_usu = request.params.id_usu;
    const query=`SELECT * FROM personas.usuarios WHERE id_usu = $1`

    conexion.query(query, [id_usu], (error, results) => {
        if (error) {
            console.error(error);
            return response.status(500).send('Error al buscar el usuario');
        } else {
            if (results.rows.length === 0) {
                return response.status(404).send('Usuario no encontrado');
            }
            response.json(results.rows[0]);
        }
    });
};

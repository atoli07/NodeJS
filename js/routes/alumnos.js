const { Router } = require('express');
const router= new Router();
const alumnos = require('../ejemplo.json');
const _ = require('underscore');

//GET
router.get('/', (req, res)=>{
    res.send(alumnos);
});

//POST
router.post('/', (req, res)=>{
    const {nombres, apellidos, grado, seccion, genero }= req.body;
    if(nombres && apellidos && grado && seccion && genero){
        const id = alumnos.length + 1;
        const NuevoEstudiante = {...req.body, id};
        alumnos.push(NuevoEstudiante);
        res.json(alumnos);
    }else{
        res.status(500).json({error: 'Peticion erronea.'});
    }
});

//PUT
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { nombres, apellidos, grado, seccion, genero } = req.body;
    if (nombres && apellidos && grado && seccion && genero) {
        _.each(alumnos, (alumno, i) => {
            if (alumno.id == id) {
                alumno.nombres = nombres;
                alumno.apellidos = apellidos;
                alumno.grado = grado;
                alumno.seccion = seccion;
                alumno.genero = genero;
            }
        });
        res.json(alumnos);
    } else {
        res.status(500).json({error: 'Peticion erronea.'});
    }
});

//DELETE
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    if (id) {
        _.each(alumnos, (alumno, i) => {
            if (alumno.id == id) {
                alumnos.splice(i, 1);
            }
        });
        res.json(alumnos);
    }
});

module.exports=router;
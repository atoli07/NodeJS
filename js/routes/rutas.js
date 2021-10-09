const {Router} = require('express');

const router= new Router();

router.get('/test', (req, res)=>{
    const data={
        "nombre":"Alumno",
        "apellidos": "Apellido"
    };
    res.json(data);
});

module.exports= router;
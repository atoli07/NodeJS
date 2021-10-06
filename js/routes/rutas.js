const {Router}= require('express');
const router= Router();

router.get('/test', (req, res)=>{
    const data={
        "nombre":"Alumno1",
        "apellidos": "Apellido1"
    };
    res.json(data);
});

module.exports= router;
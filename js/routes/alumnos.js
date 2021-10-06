const {Router}= require('express');
const router= Router();
const alumnos=require('../ejemplo.json');

router.get('/', (req, res)=>{
    res.send(alumnos);
});

module.exports=router;
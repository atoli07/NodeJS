const {Router}= require('express');
const router= Router();

router.get('/', (req, res)=>{
    res.send({
        "Title": "Hola Mundo"
    });
});

module.exports= router;
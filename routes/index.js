const express = require('express');
const router = express.Router();

//- En el index.js crear 3 rutas: '/', '/fabrica' , '/empleados' -> enviar un mensaje con la ruta en la que te encuentras

//Creamos la ruta que queramos
router.get('/', (req,res) =>{
    res.send('Estamos en el archivo index')

})

router.get('/fabrica', (req,res) =>{
    res.send('Estamos en el archivo index - fábrica')

})

router.get('/empleados', (req,res) =>{
    res.send('Estamos en el archivo index - empleados')

})


//exportamos el módulo completo
module.exports = router;
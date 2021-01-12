const express = require('express');
const router = express.Router();

//    - En el user.js crear 3 rutas: '/', '/altura' , '/edad' -> enviar un mensaje con la ruta en la que te encuentras

router.get('/', (req,res) =>{
    res.send('Estamos en el archivo User')

})

router.get('/altura', (req,res) =>{
    res.send('Estamos en el archivo User - Altura')

})

router.get('/edad', (req,res) =>{
    res.send('Estamos en el archivo User - Edad')

})


module.exports = router;
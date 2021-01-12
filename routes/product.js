const express = require('express');
const router = express.Router();

// - En el product.js crear 3 rutas: '/', '/calzado' , '/pantalon', '/reloj -> enviar un mensaje con la ruta en la que te encuentras



router.get('/calzado', (req,res) =>{
    res.send('Estamos en el archivo Product - Calzado')

})

router.get('/pantalon', (req,res) =>{
    res.send('Estamos en el archivo Product - Pantalon')

})

router.get('/reloj', (req,res) =>{
    res.send('Estamos en el archivo Product - Reloj')

})

module.exports = router;
const express = require('express');
const router = express.Router();

// - En el login.js crear 3 rutas: '/', '/si' , '/no/:mensaje -> enviar un mensaje con la ruta en la que te encuentras


router.get('/', (req,res) =>{
    res.send('Estamos en el archivo Login')

})

router.get('/si', (req,res) =>{
    res.send('Estamos en el archivo Login - Si')

})

router.get('/no/:mensaje', (req,res) =>{
    let mensaje = req.params.mensaje
    console.log(req.params.mensaje);
    res.send(mensaje)

})


module.exports = router;
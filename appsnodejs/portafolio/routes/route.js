const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    /*res.send("hola brandon escudero")
    console.log(__dirname)*/
    res.render('index')
})

/*
router.get('/informacion', (req, res)=>{
    /*res.send("hola brandon escudero")
    console.log(__dirname)
    res.render('informacion')
})

router.get('/resumen', (req, res)=>{
    /*res.send("hola brandon escudero")
    console.log(__dirname)
    res.render('resumen')
*/

module.exports = router;
/*const operaciones = require('./ejercicio1.js');

operaciones.sumar=(5,7)
operaciones.restar=(4,3)
operaciones.multiplicar(8,3)
operaciones.dividir(100,5)*/

const express = require('express')

const server = express()
server.use(express.static(__dirname + '/public'));
server.set('view engine', 'ejs');
server.set('views',__dirname + '/views');

server.use('/Brandon', require('./routes/route')); 
/*
server.get('/informacion', (req, res)=>{
    /*res.send("hola brandon escudero")
    console.log(__dirname)
    res.render('informacion')
})

server.get('/resumen', (req, res)=>{
    /*res.send("hola brandon escudero")
    console.log(__dirname)
    res.render('resumen')
})*/

server.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/public/404.html')
})
/*
server.get('/clientes', (req, res)=>{
    res.send("Pagina de clientes")
})*/

server.listen(3002, ()=>{
    console.log(`servidor 3002 encendido`)
})


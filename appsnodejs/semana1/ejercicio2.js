const express = require('express')

const server = express()
server.use('/static', express.static(__dirname + '/public'));

server.get('/', (req, res)=>{
    res.send("hola brandon escudero")
    console.log(__dirname)
})

server.get('/clientes', (req, res)=>{
    res.send("Pagina de clientes")
    console.log(__dirname)
})

server.delete('/clientes', (req, res)=>{
    res.send("Este metodo es para Delete")
})

server.listen(3002, ()=>{
    console.log(`servidor 3002 encendido`)
})
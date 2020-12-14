//importar dependecia(bilioteca=lib)
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//iniciando o express, que é uma biblioteca
const server = express();

server
//utilizar body do req
.use(express.urlencoded({extended: true}))
//utilizando os arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views',path.join(__dirname,"views"))
.set('view engine', 'hbs')

//criar uma rota
.get('/', pages.index)
.get('/imovel', pages.imovel)
.get('/cadastrar-imovel', pages.cadastrarImovel)
.post('/salvar-imovel', pages.salvarImovel)

//criar uma rota
server.listen(5500)
var express = require('express');
var app = express();
var mysql = require('mysql')


var router = require('./router')
var credentials = require('./credentials.json')
var user = require('./ws/user')
//Criação de rotas
app.use('/user/', router)
var con;

app.listen(80, function() {
    console.log('Servidor online!');

});

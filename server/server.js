var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var router = require('./router')
var credentials = require('./credentials.json')
var user = require('./ws/user')

//Criação de rotas do Usuario
app.use('/user/', router)

app.listen(8080, function() {
    console.log('Servidor online!');

});
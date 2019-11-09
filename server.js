var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routerUser = require('./routerUser');
var routerMessage = require('./routerMessage');

app.use(express.static('frontend'));

//Criação de rotas do Usuario
app.use('/user/', routerUser);

//Criação de rotas da Mensagem
app.use('/message/', routerMessage);

app.listen(8080, function() {
    console.log('Servidor online!');

});
var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //Tá com bug 

var routerUser = require('./routerUser')
var routerMessage = require('./routerMessage')
var credentials = require('./credentials.json')
var user = require('./ws/user')

app.use(express.static('frontend'));


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from 
// });

//Criação de rotas do Usuario
app.use('/user/', routerUser)
    //Criação de rotasd da Mensagem
app.use('/message/', routerMessage)
app.listen(8080, function() {
    console.log('Servidor online!');

});
var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var router = require('./router')
var credentials = require('./credentials.json')
var user = require('./ws/user')

app.use(express.static('frontend'));


// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from 
// });

//Criação de rotas do Usuario
app.use('/user/', router)

app.listen(8080, function() {
    console.log('Servidor online!');

});
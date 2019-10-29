var express = require('express');
var app = express();
var mysql = require('mysql')


var router = require('./router')
var credentials = require('./credentials.json')

//Criação de rotas
app.use('/', router)

app.listen(80, function() {
    var con = mysql.createConnection({
        host: credentials.mysql.host,
        user: credentials.mysql.user,
        password: credentials.mysql.password
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });

    console.log('Servidor online!');
});
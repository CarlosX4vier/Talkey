const credentials = require('../credentials.json');
const mysql = require('mysql')

conexao = mysql.createConnection({
    host: credentials.mysql.host,
    user: credentials.mysql.user,
    password: credentials.mysql.password,
    database: "talkey",
    port: credentials.mysql.port
});


module.exports = conexao;
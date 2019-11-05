const credentials = require('../credentials.json')
const mysql = require('mysql')

function cadastro(email, name, lastName, password) {
    if (email != null && name != null && lastName != null && password != null) {
        con = mysql.createConnection({
            host: credentials.mysql.host,
            user: credentials.mysql.user,
            password: credentials.mysql.password,
            database: "talkey"
        });

        return new Promise(function(resolve, reject) {

            con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                con.query(`INSERT INTO usuarios VALUES ( '${name}', '${lastName}', '${email}', '${password}')`, (error) => error);

                resolve(JSON.stringify({ result: "success" }))
            });

        })
    } else {
        return JSON.stringify({ result: "error", erro: "Campos vazios" });
    }
}

function get(id) {
    con = mysql.createConnection({
        host: credentials.mysql.host,
        user: credentials.mysql.user,
        password: credentials.mysql.password,
        database: "talkey"
    });

    return new Promise(function(resolve, reject) {
        con.connect(function(error) {
            con.query(`SELECT * FROM usuarios WHERE id_user = ${id}`, function(err, result) {
                if (result[0] == null) {
                    resolve(JSON.stringify({ result: "error", erro: "Usuario não existe" }))

                } else {
                    resolve(JSON.stringify(result[0]))
                }
            })
        });

    })
}


module.exports = { cadastro, get }
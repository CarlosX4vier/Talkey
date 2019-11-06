const credentials = require('../credentials.json')
const mysql = require('mysql')
const con = require('./conexao.js')

function cadastro(email, name, lastName, password) {

    if (email != null && name != null && lastName != null && password != null) {
        return new Promise(function(resolve, reject) {
            con.connect(function(err) {
                console.log("Connected!");
<<<<<<< HEAD
                con.query(`INSERT INTO usuarios(nome_user, sobrenome_user, email_user, pass_user) VALUES ('${name}', '${lastName}', '${email}', '${password}')`, function(error) {
                    if (error) throw err;
=======
                con.query(`INSERT INTO usuarios VALUES (NULL, '${name}', '${lastName}', '${email}', '${password}')`, function() {
>>>>>>> 916296d3ee9b4afcb88edf6f56583f5894f9e210
                    resolve(JSON.stringify({ result: "success" }))
                });

            });

        })
    } else {
        return JSON.stringify({ result: "error", erro: "Campos vazios" });
    }
}

function get(id) {
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
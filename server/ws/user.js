const con = require('./conexao.js')
const results = {
    400: "success",
    401: "Campos vazios",
    402: "Usuario não existe"
}

function cadastro(email, name, lastName, password) {
    if (email != null && name != null && lastName != null && password != null) {
        return new Promise(function(resolve, reject) {
            con.connect(function(err) {
                console.log("Connected!");
                con.query(`INSERT INTO usuarios(nome_user, sobrenome_user, email_user, pass_user) VALUES ('${name}', '${lastName}', '${email}', '${password}')`, function() {
                    resolve(results[400])
                });
            });
        })
    } else {
        return results[401];
    }
}

function pegar(id) {

    if (id != null) {
        return new Promise(function(resolve, reject) {
            con.connect(function(error) {
                con.query(`SELECT * FROM usuarios WHERE id_user = ${id}`, function(err, result) {
                    if (result[0] == null) {
                        resolve(403)
                    } else {
                        resolve({ result: 400, data: result[0] })
                    }
                })
            });
        })
    } else {
        return 401;
    }

}


module.exports = { cadastro, pegar }
const con = require('./conexao.js')
const results = require('../errors.json')

function cadastro(email, name, lastName, password) {
    if (email != null && name != null && lastName != null && password != null) {
        return new Promise(function(resolve, reject) {
            con.connect(async function(err) {

                //Verifica se o codigo retornado é 403 [Usuario não cadastrado]
                if (await pegarEmail(email) == 402) {
                    con.query(`INSERT INTO usuarios(nome_user, sobrenome_user, email_user, pass_user) VALUES ('${name}', '${lastName}', '${email}', '${password}')`, function() {
                        //Caso o cadastro tenha sido completado retorna 400 [sucesso]
                        resolve(400)
                    });
                } else {
                    //Retorna erro 403 [usuario já está cadastrado]
                    resolve(403)
                }
            });
        })
    } else {
        return 401;
    }
}

function login(email, password) {
    if (email != null) {
        return new Promise(function(resolve, reject) {
            con.connect(function(error) {
                con.query(`SELECT * FROM usuarios WHERE email_user = '${email}' AND pass_user = '${password}'`, function(err, result) {

                    console.log(result);
                    if (result == null) {
                        //Erro 402 [Usuario não existente]
                        resolve(402)
                    } else {
                        resolve({ result: 400, data: result[0] })
                    }
                })
            });
        })
    } else {
        //Error 401 [campo vazio]
        return 401;
    }
}

function pegarEmail(email) {
    if (email != null) {
        return new Promise(function(resolve, reject) {
            con.connect(function(error) {
                con.query(`SELECT * FROM usuarios WHERE email_user = '${email}'`, function(err, result) {
                    if (result[0] == null) {
                        //Erro 402 [Usuario não existente]
                        resolve(402)
                    } else {
                        resolve({ result: 400, data: result[0] })
                    }
                })
            });
        })
    } else {
        //Error 401 [campo vazio]
        return 401;
    }
}

function pegar(id) {
    if (id != null) {
        return new Promise(function(resolve, reject) {
            con.connect(function(error) {
                con.query(`SELECT * FROM usuarios WHERE id_user = ${id}`, function(err, result) {
                    //Se o primeiro elemento do result for igual null significa que está vazio
                    if (result[0] == null) {

                        //Erro 403 [Usuario já existente]
                        resolve(403)
                    } else {
                        resolve({ result: 400, data: result[0] })
                    }
                })
            });
        })
    } else {
        //Se campos estiverem vazios, retorna 401[Campos Vazios]
        return 401;
    }
}

function busca_id_destinatario(email_destinatario) {
    if (email_destinatario != null) {
        return new Promise(function(resolve, reject) {
            con.connect(function(err) {
                console.log("Connected!");
                con.query(`SELECT id_user FROM usuarios WHERE email_user = ${email_destinatario}')`, function() {
                    resolve(400)
                });
            });
        })
    } else {
        return 401;
    }
}




module.exports = { cadastro, pegar, pegarEmail, login }
const user = require('./user')
const con = require('./conexao')


async function enviar_email(remetente, destinatario, assunto, mensagem) {

    if (remetente != null && destinatario != null && assunto != null && mensagem != null) {

        id_destinatario = await user.pegarEmail(destinatario);
        id_destinatario = id_destinatario.data.id_user;

        if (id_destinatario != null) {

            return new Promise(function (resolve, reject) {
                con.connect(function (err) {

                    con.query(`INSERT INTO email(id_remetente, id_destinatario, assunto_email, message) VALUES ('${id_destinatario}', '${id_destinatario}', '${assunto}', '${mensagem}')`, function () {
                        resolve(400)
                    });
                });
            });

        } else {
            return 402;
        }
    } else {
        return 401;
    }
}

function getEmail(id, pasta = 0) {
    if (id != null) {
        return new Promise(async function(resolve, reject) {
            con.connect(function(err) {
                con.query(`SELECT * FROM email WHERE id_destinatario = '${id}' AND pasta_email= '${pasta}'`, function(error, result) {
                    resolve({ result: 400, data: result })
                });
            })
        })
    } else {
        return 401;
    }
}




function deleteEmail(id) {
    if (id != null) {
        return new Promise(async function(resolve, reject) {
            con.connect(function(err) {
                con.query(`DELETE FROM email WHERE id_email = '${id}'`, function(error, result) {
                    resolve({ result: 400 })
                });
            })
        })
    } else {
        return 401;
    }
}

module.exports = { getEmail, enviar_email, deleteEmail }
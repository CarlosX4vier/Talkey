const user = require('./user')
const con = require('./conexao')


async function enviar_email(remetente, email_destinatario, assunto, mensagem) {

    if (remetente != null && email_destinatario != null && assunto != null && password != null) {
        id_destinatario = await user.pegarEmail(email_destinatario).data.id_user;

        return new Promise(function(resolve, reject) {
            con.connect(function(err) {

                con.query(`INSERT INTO email(id_remetente, id_destinatario, assunto_email, mensagem_email) VALUES ('${remetente}', '${id_destinatario}', '${assunto}', '${mensagem}')`, function() {
                    resolve(400)
                });
            });
        })
    } else {
        return 401;
    }
}

function getEmail(id) {
    if (id != null) {
        return new Promise(async function(resolve, reject) {
            con.connect(function(err) {
                con.query(`SELECT * FROM email WHERE id_destinatario = ${id}`, function(error, result) {

                    resolve({ result: 400, data: result })
                });

            })

        })
    } else {
        return 401;
    }
}


module.exports = { getEmail, enviar_email }
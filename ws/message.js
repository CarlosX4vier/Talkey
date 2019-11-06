const user = require('./user')

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
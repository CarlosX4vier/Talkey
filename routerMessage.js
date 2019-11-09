var express = require('express');
var router = express.Router();
const errors = require('./errors.json')
const message = require('./ws/message')

function error(code) {
    return { result: code, error: errors[code] }
}

//Pega todos os emails de um usuario 
router.get("/:id", async function(req, res) {
    resultado = await message.getEmail(req.params.id, req.query.pasta);

    if (resultado.result != 400) {
        res.send(JSON.stringify(error(resultado)))
    } else {
        res.send(JSON.stringify(resultado));
    }

});

//Pega todos os emails enviados por um usuario
router.get("/:id/enviados", async function(req, res) {
    resultado = await message.getEnviados(req.params.id, req.query.pasta);

    if (resultado.result != 400) {
        res.send(JSON.stringify(error(resultado)))
    } else {
        res.send(JSON.stringify(resultado));
    }

});

//Envia email de um usuario para outro
router.post("/", function(req, res) {
    resultado = message.enviar_email(req.body.remetente, req.body.destinatario, req.body.assunto, req.body.mensagem);

    if (resultado.result != 400) {
        res.send(JSON.stringify(error(resultado)))
    } else {
        res.send(JSON.stringify(resultado));
    }
})

//Deleta email
router.delete("/:id", async function(req, res) {
    res.send(await message.deleteEmail(req.params.id));
})

module.exports = router;
var express = require('express');
var router = express.Router();
const errors = require('./errors.json')
const message = require('./ws/message')

function error(code) {
    return { result: code, error: errors[code] }
}

router.get("/:id", async function(req, res) {
    resultado = await message.getEmail(req.params.id, req.query.pasta);

    if (resultado.result != 400) {
        res.send(JSON.stringify(error(resultado)))
    } else {
        res.send(JSON.stringify(resultado));
    }

});

router.get("/:id/enviados", async function(req, res) {
    resultado = await message.getEnviados(req.params.id, req.query.pasta);

    if (resultado.result != 400) {
        res.send(JSON.stringify(error(resultado)))
    } else {
        res.send(JSON.stringify(resultado));
    }

});


router.post("/", function(req, res) {
    resultado = message.enviar_email(req.body.remetente, req.body.destinatario, req.body.assunto, req.body.mensagem);
    // res.send(error(400))

    if (resultado.result != 400) {
        res.send(JSON.stringify(error(resultado)))
    } else {
        res.send(JSON.stringify(resultado));
    }
})

router.delete("/:id", async function(req, res) {
    res.send(await message.deleteEmail(req.params.id));
})

module.exports = router;
var express = require('express');
var router = express.Router();
var user = require('./ws/user');
const errors = require('./errors.json');


function error(code) {
    return { result: code, error: errors[code] }
}

router.post("/", async function(req, res) {
    resultado = await user.cadastro(req.body.email, req.body.name, req.body.lastName, req.body.password);
    if (resultado.result != 400) {
        res.send(JSON.stringify(error(resultado)))
    } else {
        res.send(JSON.stringify(resultado));
    }
});

router.get("/", async function(req, res) {
    // res.header('Access-Control-Allow-Origin', '*');
    resultado = await user.login(req.query.email, req.query.password);

    if (resultado.result == 400) {
        json = JSON.stringify(resultado);
        res.send(json);
    } else {
        res.send(JSON.stringify(error(resultado)))
    }
});


router.get("/:id", async function(req, res) {
    resultado = await user.pegar(req.params.id);
    if (resultado.result == 400) {
        json = JSON.stringify(resultado);
        res.send(json);
    } else {
        res.send(JSON.stringify(error(resultado)))
    }
});

module.exports = router;
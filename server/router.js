var express = require('express');
var router = express.Router();
var user = require('./ws/user')
const errors = require('./errors.json')


function error(code) {
    return { result: code, error: errors[code] }
}

router.post("/", async function(req, res) {
    console.log(req.body);
    result = await user.cadastro(req.query.email, req.query.name, req.query.lastName, req.query.password)
    res.send(result);
});

router.get("/:id", async function(req, res) {
    resultado = await user.pegar(req.params.id)
    if (resultado.result == 400) {
        json = JSON.stringify(resultado);
        console.log(json)
        res.send(json);
    } else {
        res.send(JSON.stringify(error(result)))
    }
});

module.exports = router;
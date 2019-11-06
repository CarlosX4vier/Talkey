var express = require('express');
var router = express.Router();
const errors = require('./errors.json')
const message = require('./ws/message')

function error(code) {
    return { result: code, error: errors[code] }
}

router.get("/", async function(req, res) {
    res.send(await message.getEmail(2))
})

router.post("/", function(req, res) {
    console.log(req);
    res.send(error(400))
})

module.exports = router;
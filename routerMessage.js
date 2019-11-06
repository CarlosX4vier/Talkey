var express = require('express');
var router = express.Router();
const errors = require('./errors.json')


function error(code) {
    return { result: code, error: errors[code] }
}


router.post("/", function(req, res) {
    console.log(req);
    res.send(error(400))
})

module.exports = router
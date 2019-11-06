var express = require('express');
var router = express.Router();
var user = require('./ws/user')
router.get("/", function(req, res) {

})

router.post("/", express.urlencoded({ type: "application/json" }), async function(req, res) {
    console.log(req);
    // result = await user.cadastro(req.query.email, req.query.name, req.query.lastName, req.query.password)
    //res.send(result);
});

router.put("/:id", async function(req, res) {
    result = await user.cadastro(req.query.email, req.query.name, req.query.lastName, req.query.password)
    res.send(result);
});

router.get("/:id", async function(req, res) {
    result = await user.get(req.params.id)
    res.send(result);
});
module.exports = router;
var express = require('express');
var router = express.Router();

/* GET Request. */
router.get('/', function(req, res, next) {
  res.send({string: "This is a test"});
});

//POST Request
router.post('/', function(req, res, next) {
    res.send(req.body);
});


module.exports = router;

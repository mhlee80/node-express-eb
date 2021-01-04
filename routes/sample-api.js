var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    'message': 'This is GET'
  })
});

router.post('/', function(req, res, next) {
  res.send({
    'message': 'This is POST'
  })
});

module.exports = router;

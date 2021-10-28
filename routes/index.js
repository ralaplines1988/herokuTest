var express = require('express');
var test = require('../modules/test');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // debug('Listening');
  // res.render('index', { title: 'Express' });
  res.render('index', {title: test.multiply(5,6)});
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lejla' });
});

/* GET home page. */
router.get('/nova', function(req, res, next) {
  res.render('nova', { title: 'Nova stranica' });
});


module.exports = router;


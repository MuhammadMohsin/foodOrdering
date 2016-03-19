var express = require('express');
var router = express.Router();

router.get('/rest/api/:service/:method', function(req, res, next) {
  res.render('index', { title: req.method+' '+ req.url });
});

router.post('/rest/api/:service/:method', function(req, res, next) {
  res.render('index', { title: req.method+' '+ req.url });
});

router.put('/rest/api/:service/:method', function(req, res, next) {
  res.render('index', { title: req.method+' '+ req.url });
});

router.delete('/rest/api/:service/:method', function(req, res, next) {
  res.render('index', { title: req.method+' '+ req.url });
});

module.exports = router;

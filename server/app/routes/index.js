var express = require('express');
var router = express.Router();

router.get('/api/:service/:method', function(req, res, next) {
  res.send('index', { title: req.method+' '+ req.url });
});

router.post('/api/:service/:method', function(req, res, next) {
  res.send('index', { title: req.method+' '+ req.url });
});

router.put('/api/:service/:method', function(req, res, next) {
  res.send('index', { title: req.method+' '+ req.url });
});

router.delete('/api/:service/:method', function(req, res, next) {
  res.send('index', { title: req.method+' '+ req.url });
});

module.exports = router;

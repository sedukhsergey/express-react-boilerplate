var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
      res.send(data)
    res.render('index', { title: 'Express', message: 'hello' });
});

module.exports = router;

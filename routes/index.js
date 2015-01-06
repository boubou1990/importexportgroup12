var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

 // router.get('/', function(req, res) {
 //     res.render('form');
 // });
//
//
  router.post('/signin', function(req, res) {
      res.render('signin', { name: req.body.username });
  });

module.exports = router;

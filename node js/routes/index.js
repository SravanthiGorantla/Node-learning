var express = require('express');
var router = express.Router();

var cors= require('cors')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use(cors({ origin: true }));

module.exports = router;

var express = require('express');
var router = express.Router();
var controller = require('../controller/home');

router.get('/', controller.home)


module.exports = router;
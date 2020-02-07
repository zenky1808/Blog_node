const express = require('express');
const router = express.Router();
const controller = require('../controller/login');

router.get('/', controller.login);

router.post('/', controller.postLogin)

module.exports = router;
var express = require('express');
var router = express.Router();
var getWeatherData = require('../controllers/getWeatherData');

/* GET home page. */
router.get('/', getWeatherData);

module.exports = router;

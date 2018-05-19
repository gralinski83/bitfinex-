var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function (req, res, next) {
  request('https://api.bitfinex.com/v1/book/btcusd', function (error, response, body) {
    console.log(body);
    const orderbook = JSON.parse(body);
    res.render('user', {
      orderbook: orderbook
    });
  });

});



module.exports = router;

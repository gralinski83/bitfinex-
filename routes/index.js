/* Plik odpowiedzialny za strone glowna oraz podstrone i logowanie */
var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Gielda bitcoin',
    description: 'Bitfinex API',
    date: new Date()
  });
});

router.post('/', function (request, res, next) {
  console.log(request.body);
  const login = "admin";
  const password = "admin1";
  let error = false;
  
  if(request.body.login && request.body.pass){
    const userLogin = request.body.login;
    const userPass = request.body.pass;
    
    if(userLogin === login && userPass === password){
      console.log("admin ok");
      return res.redirect('/users');
    } else {
      error = true;
    }
  }else{
      error = true;
  }
  
  res.render('index', {
    error: error,
    title: 'Gielda bitcoin',
    description: 'Opis strony o bitcoin',
    date: new Date()
  });
});

module.exports = router;

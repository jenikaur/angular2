const express = require('express');
const router = express.Router();
var user = require('../models/users');
var mongoose = require('mongoose');
var passport = require('passport');
var passports = require('./../config/passport');


/* GET api listing. */
/*router.get('/get-users', (req, res) => {
	console.log('api works');
	user.find({}, function(err, data){
		if(err)
			console.log(err);
		else
		{
			console.log(data);
			res.send(data);
		}
	})
});

module.exports = router;*/

router.post('/login',
   passport.authenticate('local-login', {successFlash:'Authenticated', failureFlash:'Error authenticating'})
  ,function(req, res){
  		user.findOne({ email : req.body.email}, function (err, data) {
  		 	if(err)
  		 		console.log(err);
        if(data)
        {
        if(data["type"] == "admin")
          res.json({"admin" : req.session.passport.user, token : data.generateJWT()});
        else if(data["type"] == "user")
          res.json({"user" : req.session.passport.user, token : data.generateJWT()});
        }
        else 
          res.send("Unauthorized");
  		});
});


router.get('/logout', function(req, res){
  req.session.destroy();
  res.send("loggedout");
});

module.exports = router;

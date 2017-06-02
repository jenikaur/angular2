var mongoose = require('mongoose');
var user = require('../models/users.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
module.exports = function(passport) {

console.log("passport");

passport.serializeUser(function(user, done){
	 done(null, user);
});
passport.deserializeUser(function(user, done){
		done(null, user);
})

passport.use('local-login',new LocalStrategy({
	usernameField : 'email'},function(email, password, done){
		user.findOne({email : email}, function(err, data){
			if(err){return done(err);}
			else if(data)
			{
				data.comparePassword(password, function(err, isMatch){
					if(err)
						throw err;
					else
					{
						if(isMatch == false)
						{
							console.log("pass error");
							 done(null, false, {failureFlash : 'password error'});
						}
						else
							 done(null, data);
					}
					
				})
			}
			else 
				return done(null, false, {failureFlash : 'username error'});
		})
	}
))
}
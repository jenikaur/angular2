var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var Schema = mongoose.Schema;
var adminschema = new Schema({	
						"_id" : Number,
						"firstname" : String,
						"lastname" : String,
						"email" : String,
						"password" : String,
						"date_created" : Date,
						"date_modified" : Date,
						"type" : String});

adminschema.pre('save', function(next){
	var user = this;
	this.hashPassword(user.password, function(err, hash){
		if(err)
			return next(err);
		user.password = hash;
		next();
	});
})

adminschema.methods.hashPassword = function(cpassword, cb){
	bcrypt.genSalt(11, function(err, salt){
		if(err)
			return cb(err);
		bcrypt.hash(cpassword, salt, function(err, hash){
			if(err)
				return cb(err);
			return cb(null, hash);
		})
	})
}


adminschema.methods.comparePassword = function(cpassword, cb){
	bcrypt.compare(cpassword, this.password, function(err, isMatch){
		if(err)
			return cb(err);
		cb(null, isMatch);
	})
}

adminschema.methods.generateJWT = function(){
	var today = new Date();
	var exp = new Date(today);
	exp.setDate(today.getDate()+60);

	return jwt.sign({
		_id :this._id,
		username : this.email,
		exp : parseInt(exp.getTime() / 1000),
	}, 'SECRET');
}

var admin = mongoose.model('myadmin', adminschema);
module.exports = admin;
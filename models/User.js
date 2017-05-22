var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var dotenv = require('dotenv').config();

var userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  hash: String,
  salt: String,

  facebook: String,
  twitter: String,
  google: String,
  tokens: Array,

  profile: {
    first_name: String,
    last_name: String,
    location: String,
    website: String,
    picture: String
  }
});

userSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password,this.salt,1000,64,'sha1').toString('hex');
};

userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000,64,'sha1').toString('hex');
    return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp:parseInt(expiry.getTime()/1000)}, process.env.JWT_SECRET);
};

var User = mongoose.model('User', userSchema);
module.exports = User;
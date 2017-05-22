var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose');
var User = require('../models/User');

passport.use('local', new LocalStrategy({
  usernameField: 'email',
},
 function(email, password, done) {
   User.findOne({ email: email.toLowerCase() }, function(err, user) {
     if (err) {
       return done(err);
     }
     if (!user) {
       return done(null, false, { message: 'Email not found.' });
     }
     if (!user.validPassword(password)) {
       return done(null, false, { message: 'Invalid email or password.' });
     }
     return done(null, user);
   });
 }
));

var User = require('../models/User');
var passport = require('passport');

function postSignin(req, res, next){
  req.assert('email').isEmail();
  req.assert('password').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    return res.sendStatus(400);
  }

  passport.authenticate('local', function(err, user, info) {
    var token;
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.sendStatus(400);
    }
    token = user.generateJwt();
    return res.json({ 'token': token }) ;
  })(req, res, next);
};

module.exports.post = postSignin

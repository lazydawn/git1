var User = require('../models/User');

function postSignup(req, res){
  req.assert('email').isEmail();
  req.assert('password').len(6);
  // req.assert('confirmPassword').equals(req.body.password);
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) {
    res.sendStatus(400);
  }

  var user = new User({
    email: req.body.email,
    profile: {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    }
  });

  User.findOne({ email: req.body.email }, function(err, existingUser){
    if (err) {
      return next(err);
    }
    if (existingUser){
      return res.sendStatus(400);
    }
    user.setPassword(req.body.password);
    user.save(function(err){
      var token = user.generateJwt();
      return res.json({ 'token': token }) ;
    });
  });
};

module.exports.post = postSignup;

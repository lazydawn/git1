var User = require('../models/User');

function postUser(res, req){
  res.render('user',{title:'User'});
}

module.exports.post = postUser;

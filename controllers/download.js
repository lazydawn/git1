var User = require('../models/User');

function postDownload(res, req){
  res.render('download',{title:'Download'});
}

module.exports.post = postDownload;

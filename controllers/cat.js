var Cat = require('../models/Cat');
var User = require('../models/User');
var getAuthor = require('../controllers/profile');

function createCat(req, res){

  getAuthor(req, res, function(req, res, user) {

    var cat = new Cat({
      _creator: user._id,
      rfid: req.body.rfid,
      name: req.body.name
    });
    cat.save(function(err){
      return res.sendStatus(200);
    });
  });

};

function findCat(req, res){

  getAuthor(req, res, function(req, res, user) {
    Cat.find({},function(err,cat){
      if(err){
        res.send(err);
      }
      return res.json({"cats":cat});
    });
  });
};
  function findoneCat(req, res){
    getAuthor(req, res, function(req, res, user) {
      Cat.findOne(req.params.rfid,function(err,cat){
        if(err){
          res.send(err);
          return res.json(cat);
        };
      });
    });
  };

    function updateCat(req, res){
      getAuthor(req, res, function(req, res, user) {
        Cat.findOne(req.params.rfid,function(err,cat){
          if (err) {
            return next(err);
          }
          if (cat){
            if(req.body.name){
              cat.name = req.body.name;
            }
            if(req.body.access){
              cat.access = req.body.access;
            }
            cat.save(function(err) {
              if (err)
              res.send(err);
            });
          };
        });
      });
    };

    function removeCat(req, res){
      getAuthor(req, res, function(req, res, user) {
        Cat.findOne({rfid:req.params.rfid}, function(err,cat){
          if (cat){
            cat.remove(function(err){
              return res.sendStatus(200);
            });
          }
          return res.sendStatus(200);
        });
      });
    };

  module.exports.post = createCat;

  module.exports.getlist = findCat;

  module.exports.get = findoneCat;

  module.exports.put = updateCat;

  module.exports.delete = removeCat;

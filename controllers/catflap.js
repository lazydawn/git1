var CatFlap = require('../models/CatFlap');
var User = require('../models/User');
var getAuthor = require('../controllers/profile');

function createCatFlap(req, res){

  getAuthor(req, res, function(req, res, user) {

    var CatFlap = new CatFlap({
      _creator: user._id,
      rfid: req.body.rfid,
      name: req.body.name
    });
    CatFlap.save(function(err){
      return res.sendStatus(200);
    });
  });

};

function findCatFlap(req, res){

  getAuthor(req, res, function(req, res, user) {
    CatFlap.find({},function(err,cat){
      if(err){
        res.send(err);
      }
      return res.json({"catFlaps":cat});
    });
  });
};
  function findoneCatFlap(req, res){
    getAuthor(req, res, function(req, res, user) {
      CatFlap.findOne(req.params.rfid,function(err,cat){
        if(err){
          res.send(err);
          return res.json(cat);
        };
      });
    });
  };

    function updateCatFlap(req, res){
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

    function removeCatFlap(req, res){
      getAuthor(req, res, function(req, res, user) {
        Cat.findOne(req.params.rfid, function(err,cat){
          if (err) {
            return next(err);
          }
          if (cat){
            cat.remove(function(err){
              return res.sendStatus(200);
            });
            return res.sendStatus(200);
          }
          return res.sendStatus(400);
        });
      });
    };

  module.exports.post = createCatFlap;

  module.exports.getlist = findCatFlap;

  module.exports.get = findoneCatFlap;

  module.exports.put = updateCatFlap;

  module.exports.delete = removeCatFlap;

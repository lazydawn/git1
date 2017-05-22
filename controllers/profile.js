var User = require('../models/User');


var getAuthor = function (req, res, callback) {
    if (req.payload && req.payload.email) {
        User.findOne({ email: req.payload.email })
            .exec(function (err, user) {
            if (!user) {
                return res.sendStatus(400);
            }
            else if (err) {
                return res.sendStatus(400);
            }
            callback(req, res,user);
        });
    } else {
        return res.sendStatus(400);
    }
};

module.exports = getAuthor;

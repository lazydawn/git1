var mongoose = require('mongoose');

var catFlapSchema = new mongoose.Schema({
    // _creator : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    id: { type: String, required: true},
    name: String,
    power: String,
    permittedCats: String

});

var CatFlap = mongoose.model('CatFlap', catFlapSchema);
module.exports = CatFlap;

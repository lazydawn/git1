var mongoose = require('mongoose');

var catSchema = new mongoose.Schema({
    _creator : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    rfid: { type: String, required: true},
    name: String,
    access: String
});

var Cat = mongoose.model('Cat', catSchema);
module.exports = Cat;

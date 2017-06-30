var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var pageDataSchema = new Schema({
    url: {type: String, unique: true},
    word: String
});

mongoose.model('PageData', pageDataSchema);
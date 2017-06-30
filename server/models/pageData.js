var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var pageDataSchema = new Schema({
    url: String,
    word: String
});

mongoose.model('PageData', pageDataSchema);
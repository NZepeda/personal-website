var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var pageDataSchema = new Schema({
    url: String
});

mongoose.model('PageData', pageDataSchema);
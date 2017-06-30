'use strict'
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var mongoose = require('mongoose');
var mongoConnection = 'mongodb://nzepeda:MBnz1993@ds145312.mlab.com:45312/mbapagedata';
var dbOptions = {
    user: "nzepeda",
    pass: "MBnz1993"
}

require('./server/models/pageData');

mongoose.connect(mongoConnection, dbOptions);
require('./server/routes.js')(app);

// Start the server
app.listen(port, function(req, res){
    console.log('I\'m listening on port ' + port);
});
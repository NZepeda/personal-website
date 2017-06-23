'use strict'
var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

require('./server/routes.js')(app);

// Start the server
app.listen(port, function(req, res){
    console.log('I\'m listening on port ' + port);
});
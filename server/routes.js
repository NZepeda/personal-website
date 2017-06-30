var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app){

    app.all('*', function(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'accept, content-type');

        if('OPTIONS' == req.method){
            res.send(200);
        }
        else{
            next();
        }
    });
    // API Endpoint
    var systemController = require('./controllers/systemController');
    app.get('/addPageData', systemController.postUrlToDb);
    //

    app.get('/', function(req, res){
        res.sendFile(path.resolve(__dirname + '/../client/index.html'));
    });

    // Static mapping redirects
    app.use('/js', express.static(__dirname + '/../client/js'));
    app.use('/css', express.static(__dirname + '/../client/styles'));
    app.use('/scripts', express.static(__dirname + '/../node_modules'));
    app.use('/color', express.static(__dirname + '/../client/color'));
    app.use('/img', express.static(__dirname + '/../client/img'));
    app.use('/fonts', express.static(__dirname + '/../client/fonts'));
}

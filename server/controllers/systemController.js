var mongoose = require('mongoose'),
PageData = mongoose.model('PageData');

exports.postUrlToDb = function(req, res){
    var newData = new PageData({url: req.query.pageUrl, word: req.query.word});
    newData.save(function(err, data){
        if(err){
            res.status(500).send('Error posting to the database!');
        }
        else{
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send(data);
        }
    });
}
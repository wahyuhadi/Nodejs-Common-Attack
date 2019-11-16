var express = require('express');
var app = express();
app.get('/', function(req, res) {
    // woot for this
    file = __dirname + "/" + req.query.path
    res.download(file) 
});
app.listen(8000);
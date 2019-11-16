var express = require('express');
var app = express();
app.get('/', function(req, res) {
    // dont use eval
    let data = eval(req.query.name)
    console.log(data)
    if (data) {
        res.send("woot")
    }  else {
        res.send("opps ")
    } 
});
app.listen(8000)

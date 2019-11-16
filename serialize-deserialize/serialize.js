/* author: wahyuhadi */

var express = require('express');
var serialize = require('node-serialize');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({limit:1024102420, type:'application/json'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));


app.post("/serialize", function(req, res) {
    // serialize.unserialize vuln function
    var obj =  serialize.unserialize(req.body)
    if (obj.user) {
        res.send("hello" + obj.user)
    } else {
        res.send("hello human")
    }
})

app.use((err, res) => {
    return res.status(404).json({ 
        error : true,
        code: 404,
        status: 'Not Found',/* MODULES.HTTP.STATUS_CODES[404] */
        message : 'Endpoint Not Found',
        result: {}
    });
});

app.listen(8000)

/* for app listen */

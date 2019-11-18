var path = require('path');
var express = require('express');
var formidable = require('formidable');

var app = express();

app.use(express.static('www'));
app.post('/uploadvideo', (req, res) => {
    var form = new formidable.IncomingForm();
    form.uploadDir = path.resolve(__dirname, './www/uploades')
 
    form.keepExtensions = true
 
    form.parse(req, function (err, fields, files) { 
        // console.log(files);
        res.send({msg:'ok'}); 
    });
});


app.listen(3000, () => {
    console.log(3000)
})




























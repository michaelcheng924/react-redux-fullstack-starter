var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send('HELLO');
});

app.listen(PORT, function() {
    console.log('Server on port ', PORT);
});

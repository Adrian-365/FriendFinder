//require path, body-parser, and express
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var friends = require('./app/data/friends')

//set up the port, deployable to heroku etc.
var PORT = process.env.PORT || 3000;
// set up middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
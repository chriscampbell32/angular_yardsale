var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var PORT = process.env.PORT || 8080;

//MONGOOSE CONNECT//
var db = 'mongodb://localhost/yardsale';
mongoose.connect(db);


app.listen(PORT, function(req, res) {
    console.log("listening on port %s:", PORT);
    
});
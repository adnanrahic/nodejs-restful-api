var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
app.use('/users', UserController);

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
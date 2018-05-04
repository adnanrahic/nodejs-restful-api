const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');


/* APP CONFIGURATION*/
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;
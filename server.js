require('dotenv').config({ path: './variables.env' });
var app = require('./app');
var serverless = require('serverless-http');

module.exports.handler = serverless(app);
var app = require('./app');
var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.info('Express server listening on port ' + server.address().port);
});
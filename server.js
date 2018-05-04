var app = require('./app');

// You have access to the PORT via
// server.address().port
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Express server listening on port ${server.address().port}`);
});
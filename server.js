const app = require('./app');
const port = process.env.PORT || 3000;
const express = require('express');


 /* Render home page */
app.get("/home", (req, res) => {
    res.sendFile("index.html", {"root": __dirname + '/client-side/web'});
    });


 /* Use resources */
app.use("/resources", express.static(__dirname + '/client-side/resources')); 


var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
//require all modules
//open connection to server

var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
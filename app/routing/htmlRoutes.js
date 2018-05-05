//This page serves up the HTML pages

var path = require("path");

function htmlRoute(app){
  app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  
  app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};

module.exports = htmlRoute;
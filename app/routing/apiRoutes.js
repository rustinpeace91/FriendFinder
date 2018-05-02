var friends = require("../data/friends.js");

function htmlRoute(app){
  app.get("/api/friends", function(req, res){
    res.json(friends);
  });

 app.post("/api/tables", function(req, res) {
   friends.push(req.body);
   res.json(true);
 });
 

};

module.exports = htmlRoute;
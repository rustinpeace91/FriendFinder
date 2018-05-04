var friends = require("../data/friends.js");
var compare = require("../data/comparelogic.js");

function htmlRoute(app){
  app.get("/api/friends", function(req, res){
    res.json(friends);
  });

 app.post("/api/friends", function(req, res,) {
   console.log(req.headers);
   friends.push(req.body);
   console.log(JSON.stringify(req.body, null, 4));
   res.json(true); 
 });
 

};

module.exports = htmlRoute;
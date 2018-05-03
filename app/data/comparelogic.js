
var friends = [
  {
    "name":"Ahmed",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  },
  {
    "name":"Jiff",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        3,
        2,
        1,
        3,
        5,
        2,
        1,
        4,
        5,
        1
      ]
  },
  {
    "name":"Jeeff",
    "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores":[
        4,
        1,
        3,
        2,
        5,
        4,
        3,
        4,
        5,
        2
      ]
  }
  
]

var me = friends[0];
var them = friends[1];
var differental = 0;
var lowestDiff = 100000;
var closestFriend = friends[0];
for(var i; i < friends.length; i++){
    them = friends[i];
    if(them.name != me.name){
        for(var o = 0; o < 10; o++){
            var diff = Math.abs(me.scores[o] - them.scores[o]);
            differental += diff;
        }
        if(differental < lowestDiff){
            closestFriend = them;
            lowestDiff = diff;
        }
    };
};

console.log(lowestDiff);
console.log(closestFriend);


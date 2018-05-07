
function closestFriend(me, friends, func){
    var me = me;
    var friends = friends;
    var them = friends[0];
    var differental = 0;
    var lowestDiff = 100000;
    var closestFriend = them[0];
    for(var i = 0; i < friends.length; i++){
        them = friends[i];
        if(them.name != me.name){
            differental = 0;
            for(var o = 0; o < 10; o++){
                var diff = Math.abs(me.scores[o] - them.scores[o]);
                differental += diff;
            };
            if(differental < lowestDiff){
                closestFriend = them;
                lowestDiff = differental;
            };

        };
    };
    func(closestFriend);
};

console.log('yeah');

//module.exports = closestFriend;


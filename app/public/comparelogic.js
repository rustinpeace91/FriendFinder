
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

    //decided to display a percentage as well.  the greatest difference possible = 40 (5-1 times 10), 
    percent = parseInt((((40 - lowestDiff) / 40) * 100));
    func(closestFriend, percent);

};



module.exports = closestFriend;

//the logic that determines which friend in the friends array most closely matches the values just entered
//takes, your data as an object, the entire friends object array, and a callback

   /* function closestFriend(me, friends, func){
        var me = me;
        var friends = friends;
        var them = friends[0];
        var differental = 0;
        var lowestDiff = 100000;
        var closestFriend = them[0];
        var percent = 0;
        //for loop that cylces through the friends array, skips if the name matches the name just put in
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


        //decided to display a percentage as well.  the greatest difference possible = 40 (5-1 times 10), 
        percent = parseInt((((40 - lowestDiff) / 40) * 100));
        func(closestFriend, percent);
    };*/


    //submit event. stores data in object newFriend, pushes it to the Friends object array. runs comparison logic (whch will skip your data), and displays match info to the modal
(function(window) {
    var goodBye_greeting = {};
    var speakWord = "Good Bye";


    goodBye_greeting.speak = function(name) {
        console.log(speakWord +" " + name);
    };

    window.goodBye_greeting = goodBye_greeting;

})(window);
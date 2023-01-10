(function (window) {
    var hello_greeting = {};
    var speakWord = "Hello";

    hello_greeting.speak = function(name){
        console.log(speakWord + " " + name);
    }

    window.hello_greeting = hello_greeting;
})(window);
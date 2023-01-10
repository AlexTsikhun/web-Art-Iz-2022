var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names.length; i++) {
// console.log(names[i][0]);
  if (names[i][0]=="J") {
    goodBye_greeting.speak(names[i]);
  } else {
    hello_greeting.speak(names[i]);
  }
}
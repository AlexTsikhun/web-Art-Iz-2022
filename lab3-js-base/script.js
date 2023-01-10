// program that doesn't like long names)
console.log(`Base method:`);
var names_base = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (let i = 0; i < names_base.length; i++) {

    if (names_base[i].charAt(0).toLocaleLowerCase()==="j") { // or names[i][0]
        goodBye_greeting.speak(names_base[i]);
    } else {
        hello_greeting.speak(names_base[i]);
    }
}
/////////////////////////////////////////////////
console.log(`//////////////////
ASCII method
(count for eatch word ascii code):`);

var names_ascii = ["Finnegan", "Antonio", "Jen", "Jason", "Angelina", "Frank", "Steven", "Larry", "Paula", "Maximilian", "Yan", "David", "Erling", "Paul"];


let sum_ascii = 0;
for (let i = 0; i<names_ascii.length; i++){
    for (let j=0; j<names_ascii[i].length; j++){
        let count_ascii_names = names_ascii[i].charCodeAt(j)
        sum_ascii+=count_ascii_names;
    }
    // console.log(sum_ascii); //can watch scii value
    if (sum_ascii>700) {
        goodBye_greeting.speak(names_ascii[i]);
    } else {
        hello_greeting.speak(names_ascii[i]);
    }
    sum_ascii=0;
}

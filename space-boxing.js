const prompt = require("prompt-sync")();

let weight = Number(prompt("Enter you weight: "));
let operation = prompt('Planet Name (Venus, Mars, Jupiter, Saturn, Uranus, Neptune,): ');

console.log("Your weight on this planet will be:");

//if the operation is equal to '+'
if (operation === 'Venus') {
    //do this
    let result = weight + 0.78;
    console.log(result);
} else if (operation === 'Mars') {
    //do this
    let result = weight * 0.39;
    console.log(result);
} else if (operation === 'Jupiter') {
    //do this
    let result = weight * 2.65;
    console.log(result);
} else if (operation === 'Saturn') {
    //do this
    let result = weight * 1.17;
    console.log(result);
} else if (operation === 'Uranus') {
    //do this
    let result = weight * 1.05;
    console.log(result);
} else if (operation === 'Neptune') {
    //do this
    let result = weight * 1.23;
    console.log(result);
} else {
    console.log("You did not enter a valid operation!!!!")
}




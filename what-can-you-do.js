const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

if (num <16){
    console.log("You cannot drive.");
}

else if (num <=17){
    console.log("You can drive but not vote");
}

else if (num <=24){
    console.log("You can vote but not rent a car");
}

else if(num >=25){
    console.log("You can pretty much do anything");
}

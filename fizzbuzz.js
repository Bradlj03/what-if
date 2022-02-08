const prompt = require('prompt-sync')();
let num = Number(prompt('Enter Number'))
 
if( (num%3) === 0 && (num%5) === 0 ) {
    console.log( "FizzBuzz" );
}else if( (num%3) === 0 ) {
    console.log( "Fizz" );
}else if( (num%5) === 0 ) {
    console.log( "Buzz" );
}else{
    console.log( "Not Fizz or Buzz" );}
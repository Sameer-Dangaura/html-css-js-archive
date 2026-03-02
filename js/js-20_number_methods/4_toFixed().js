//-> The toFixed() Method                               (is also done in "js-17_string_templates/2_interpolation.js")
//-> :
//-> toFixed() returns a string, with the number written with a specified number of decimals:

let num1 = 9.565;

console.log(num1.toFixed(0));   //outputs: 10
console.log(num1.toFixed(1));   //outputs: 9.6
console.log(num1.toFixed(2));   //outputs: 9.56
console.log(typeof num1.toFixed(2));   //outputs: string

//_________________________________________________
//-> toFixed(2) is perfect for working with money.
//_________________________________________________

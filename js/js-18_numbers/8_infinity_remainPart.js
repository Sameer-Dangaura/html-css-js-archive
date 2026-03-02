//-> Division by 0 (zero) also generates Infinity:

let num1 = 2 / 0; 
let num2 = -2 / 0;

console.log(num1);  //outputs: Infinity
console.log(num2);  //outputs: -Infinity


// Infinity is a number: typeof Infinity returns number.
console.log(typeof num1);   //outputs: number
console.log(typeof num2);   //ouptuts: number

//-> BigInt Operators
//-> :
//-> Operators that can be used on a JavaScript Number can also be used on a BigInt.

let num1 = 9007199254740995n;
let num2 = 9007199254740995n;

let result = num1 * num2;
console.log(result);    //outputs: 81129638414606735738984533590025n



//-> Notes
//-> :
//-> Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).

//-> Unsigned right shift (>>>) can not be done on a BigInt (it does not have a fixed width).

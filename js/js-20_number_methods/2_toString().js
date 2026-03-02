//-> The toString() Method                              (is also discussed in "js-18_numbers/9_hexadecimal.js") 
//-> :
//-> The toString() method returns a number as a string.

//-> All number methods can be used on any type of numbers (literals, variables, or expressions):

let num1 = 123;

console.log(num1.toString());   //outputs: '123'
console.log(typeof num1.toString());    //outputs: string

console.log((123).toString());  //outputs: '123'
console.log(typeof (123).toString());  //outputs: string

console.log((100+23).toString());   //outputs: '123'
console.log(typeof (100+23).toString());   //outputs: string

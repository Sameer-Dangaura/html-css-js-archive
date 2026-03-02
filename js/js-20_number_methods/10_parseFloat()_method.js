//-> The parseFloat() Method
//-> :
//-> parseFloat() parses a string and returns a decimal (floating-point) number. Spaces are allowed. Only the first number is returned:

console.log(parseFloat("10"));   //outputs: 10

console.log(parseFloat("10.5"));    //outputs: 10.5 ,(This is the difference in parseFloat and parseInt).

console.log(parseFloat("10,5"));    //outputs: 10
console.log(parseFloat("10 5"));    //outputs: 10
console.log(parseFloat("10years"));    //outputs: 10
console.log(parseFloat("years 10"));    //outputs: NaN
//-> If the number cannot be converted, NaN (Not a Number) is returned.

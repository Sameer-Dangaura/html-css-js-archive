//-> The parseInt() Method                              (if you don't know about parses meaning do visit "7_converting_variables_to_numbers.md")
//-> :
//-> parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
//-> Stops at the first non-numeric character.

console.log(parseInt("-10"));    //outputs: -10
console.log(parseInt("-10.3"));    //outputs: -10
console.log(parseInt("10"));    //outputs: 10
console.log(parseInt("10.3"));    //outputs: 10
console.log(parseInt("10,3"));    //outputs: 10
console.log(parseInt("10 3"));    //outputs: 10
console.log(parseInt("10years"));    //outputs: 10 
console.log(parseInt("10 years"));    //outputs: 10

//-> If the number cannot be converted, NaN (Not a Number) is returned.
console.log(parseInt("years 10"));    //outputs: NaN ,(Since, No number at the start)

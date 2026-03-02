//-> 2) Explicit conversion (Type casting):

//-> b) Convert to String explicitly
//-> :
//->  This involves convert any other data types to strings, with the help of either
//->   String()      or,        toString()     functions.

let numValue = 49;
let string1Value = String(numValue);

console.log(string1Value);   //outputs: '49'
console.log(typeof string1Value);    //outputs: string

let string2Value = numValue.toString();
console.log(string2Value);   //outputs: '49'
console.log(typeof string2Value); //outputs: string 
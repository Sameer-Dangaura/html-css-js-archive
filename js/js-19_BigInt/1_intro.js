//-> JavaScript BigInt
//-> :
//-> JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.



//-> JavaScript Integer Accuracy
//-> :
//-> JavaScript integers are only accurate up to 15 digits:
//-> e.g: do visit: "js-18_numbers/2_integer_precision.js"

//________________________________________________________
//-> In JavaScript, all numbers are stored in a 64-bit floating-point format (IEEE 754 standard).

//-> With this standard, large integer cannot be exactly represented and will be rounded.

//-> Because of this, JavaScript can only safely represent integers:

//-> Up to 9007199254740991(which is 2^53 - 1)

//-> and

//-> Down to -9007199254740991(which is -(2^53 - 1)).

//-> Integer values outside this range lose precision.

let myNum1 = 9007199254740991;
let myNum2 = 9007199254740992;
let myNum3 = 9007199254740993;
let myNum4 = 9007199254740994;
let myNum5 = 9007199254740995;
console.log(myNum1);    //outputs: 9007199254740991
console.log(myNum2);    //outputs: 9007199254740992
console.log(myNum3);    //outputs: 9007199254740992
console.log(myNum4);    //outputs: 9007199254740994
console.log(myNum5);    //outputs: 9007199254740996

//-> Numbers Beyond 9007199254740992 Lose Precision
//-> Once we go beyond 9007199254740992, not every integer can be accurately represented: 
//-> as you can see in console.log(myNum3)'s and console.log(myNum5)'s output.

//-> This happens because JavaScript starts rounding numbers to the nearest representable floating-point value.

//-> This can be solved by using     BigInt .
//________________________________________________________




//-> How to Create a BigInt
//-> :
//-> To create a BigInt, 
//-> append     n    to the end of an integer 
//-> or, 
//-> call    BigInt() :

let num1 = 9999999999999999;
let num2 = 9999999999999999n;
let num3 = BigInt("9999999999999999");
console.log(num1);  //outputs: 10000000000000000
console.log(num2);  //outputs: 9999999999999999n
console.log(num3);  //outputs: 9999999999999999n




//-> BigInt: A new JavaScript Datatype
//-> :
//-> The JavaScript typeof a BigInt is "bigint":
console.log(typeof num2);   //outputs: bigint
console.log(typeof num3);   //outputs: bigint

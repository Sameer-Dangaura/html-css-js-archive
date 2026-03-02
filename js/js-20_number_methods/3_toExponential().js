//-> The toExponential() Method
//-> :
//-> toExponential() returns a string, with a number rounded and written using exponential notation.

//-> A parameter defines the number of characters behind the decimal point:

let num1 = 1.5;
console.log(num1.toExponential());  // no parameter  
//-> outputs: 1.5e+0
//-> 1.5e+0 means: 
//-> 1.5 * 10^0 
//-> which is equal to: 1.5

console.log(num1.toExponential(1));     //parameter as 1 
//-> outputs: 1.5e+0
console.log(num1.toExponential(2));     //parameter as 2
//-> outputs: 1.50e+0
console.log(num1.toExponential(3));     //parameter as 3
//-> outputs: 1.500e+0




//-> Basic Usage:
let num = 12300000;
console.log(typeof num.toExponential());  //outputs: string
console.log(num.toExponential());  //outputs: 1.23e+7
//-> here, what does 1.23e+7 means:
//-> 1.23 * 10^7    , (e+7 => represents 10^7)
//__________________________________________________
//-> The parameter is optional. If you don't specify it, JavaScript will not round the number. As you can see above.
//__________________________________________________


console.log(num.toExponential(0));  //parameter as 0
//-> outputs: 1e+7
console.log(num.toExponential(1));  //parameter as 1
//-> outputs: 1.2e+7
console.log(num.toExponential(2));  //parameter as 2
//-> outputs: 1.23e+7
console.log(num.toExponential(3));  //parameter as 3
//-> outputs: 1.230e+7
console.log(num.toExponential(7));  //parameter as 7
//-> outputs: 1.2300000e+7





//-> Another Senario:

let num3 = 123.456;
console.log(num3.toExponential(2)); //parameter as 2
//-> outputs: 1.23e+2
//-> 1.23e+2 means: 
//-> 1.23 * 10^2 
//-> which is equal to: 123

console.log(num3.toExponential(3)); //parameter as 3
//-> outputs: 1.235e+2
//-> 1.235e+2 means: 
//-> 1.235 * 10^2 
//-> which is equal to: 123.5

console.log(num3.toExponential(4)); //parameter as 4
//-> outputs: 1.2346e+2
console.log(num3.toExponential(5)); //parameter as 5
//-> outputs: 1.23456e+2
console.log(num3.toExponential(6)); //parameter as 6
//-> outputs: 1.234560e+2

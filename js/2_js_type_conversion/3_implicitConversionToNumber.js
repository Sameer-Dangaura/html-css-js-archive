//-> 1) Implicit conversion (Automatic conversion):

//-> b) Implicit conversion to Number
//-> :

//-> Implicit type conversion in javascript refers as when converting to Number in JavaScript occurs automatically when non-numeric values are used in numeric contexts, such as arithmetic operations or comparisons.

//->  JavaScript tries to convert non-numeric values to numbers to perform operation,
//-> except addition(+) operation. -> Why? 
//-> Ans: for that do visit "2_implicitConversionToString.js".


let answer;

answer = "6" * 2;
console.log(answer);    //outputs: 12
console.log(typeof(answer));    //outputs: number

answer = "6" / "2";
console.log(answer);    //outputs: 3
console.log(typeof(answer));    //outputs: number

answer = "6" - "2";
console.log(answer);    //outputs: 4
console.log(typeof(answer));    //outputs: number

answer = "6" % 2;
console.log(answer);    //outputs: 0
console.log(typeof(answer));    //outputs: number


answer = "6" - "Hi";    
//-> Here, "6" is a non-numeric value (can also be called as numeric character) but, "Hi" is a non-numeric string.
console.log(typeof(answer));    //outputs: number
console.log(answer);    //outputs: NaN (String "Hi" cannot be converted to a number)

//-> As we know, JavaScript tries to convert non-numeric values to numbers to perform operation But, Here "Hi" is a non-numeric string which cannot be converted to a number. So, it displays: Not-a-Number (NaN).
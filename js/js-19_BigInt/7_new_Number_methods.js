//________________________________________________________
//-> Since, Number is built-in object in JavaScript which is discussed in "6_min_n_max_safe_integers.js" also. 
//-> So, hoping that you do not have confusion in this chapter's part-7 related to    Number(which is object).
//________________________________________________________

//-> New Number Methods
//-> :
//-> ES6 also added 2 new methods to the Number object:

//-> * Number.isInteger()
//-> * Number.isSafeInteger()




//-> The Number.isInteger() Method
//-> :
//-> The Number.isInteger() method returns true if the argument is an integer.
console.log(Number.isInteger(10));  //outputs: true
console.log(Number.isInteger(10.5));    //outputs: false




//-> The Number.isSafeInteger() Method
//-> :
//-> A safe integer is an integer that can be exactly represented as a double precision number.
//-> Hope you have understood the what the safe integer is, after came from "1_intro.js", "5_precision_curosity.js", "6_min_n_max_safe_integers.js" .

//-> The Number.isSafeInteger() method returns true if the argument is a safe integer.

console.log("\n", Number.isSafeInteger(10));    //outputs: true
console.log(Number.isSafeInteger(9007199254740992));    //outputs: false
console.log(Number.isSafeInteger(9007199254740991));    //outputs: true


//-> Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).

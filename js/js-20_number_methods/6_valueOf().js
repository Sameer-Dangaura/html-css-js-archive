//-> The valueOf() Method
//-> :
//-> valueOf() simply returns a number as a number.

let num1 = 42;
console.log(typeof num1.valueOf());    //outputs: number 
console.log(num1.valueOf());    //outputs: 42
console.log(num1);    //outputs: 42
console.log(num1 == num1.valueOf());    //outputs: true
//-> See, there is no difference.
//-> Primitive values (numbers, strings, booleans) already return themselves when used. So, not needed to use explicitly valueOf().




//-> So, What about the objects ?
//-> :
//-> Here, you go:
let myNumber = new Number(10);  //created Number object using Number() constructor function.

console.log(myNumber);  //outputs: [Number: 10]
console.log(myNumber.valueOf());    //outputs: 10

console.log(myNumber + 5);  //outputs: 15 , (JavaScript calls myNumber.valueOf() automatically)
//-> Here, valueOf() is used implicitly to get 10 from new Number(10).
//-> And get added with 5.


//----------------------------------------------------
//-> Conclusion: Should You Use valueOf()?
//-> :
//-> You don’t need to call it manually in most cases.
//-> JavaScript calls it automatically when needed.
//-> Useful for custom object conversions (rare).
//----------------------------------------------------

//___________________________________________________
//-> All JavaScript data types have a valueOf() and a toString() method.
//___________________________________________________

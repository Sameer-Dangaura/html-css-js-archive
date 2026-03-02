//-> 1) Implicit conversion (Automatic conversion):

//-> d) null conversion to Number
//-> :
//->  When   null    is implicitly used in a numeric context, such as in arithmetic operations or comparisions, it is converted to the number 0.

//-> This implicit conversion ensures that operations involving   null   behave predictably within numeric contexts.


let answer = null + 10; 
//-> The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.

console.log(answer);    //outputs: 10
console.log(typeof answer); //outputs: number
//-> JavaScript Numbers as Objects
//-> :

//-> Normally JavaScript numbers are primitive values created from literals:
let num1 = 123;


//-> But numbers can also be defined as objects with the keyword new:
let num2 = new Number(123);
//-> As we have already studied about JS object constructor function. Here,     new Number()     gonna create a Number object, 
//-> where    Number()     is constructor function. And it is taking argument "123".

console.log(num2);  //outputs: [Number: 123]
console.log(typeof num2);   //outputs: object




//________________________________________________________

//-> Do not create Number objects.

//-> The    new      keyword complicates the code and slows down execution speed.

//-> Number Objects can produce unexpected results:

//-> For more, do visit: w3schools.

//-> Comparing two JavaScript objects always returns false.

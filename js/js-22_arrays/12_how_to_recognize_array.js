//-> How to Recognize an Array
//-> :
//-> A common question is: How do I know if a variable is an array?

//-> The problem is that the JavaScript operator typeof returns "object":

const fruitsBox = ["Apple", "Banana", "Papaya"];
console.log(typeof fruitsBox);  //outputs: object

//-> The typeof operator returns object because a JavaScript array is an object.


//____________________________________________________

//-> Solution 1:
//-> To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():

console.log(Array.isArray(fruitsBox));  //outputs: true
//_____________________________________________________

//-> Solution 2:
//-> The instanceof operator returns true if an object is created by a given constructor:

console.log(fruitsBox instanceof Array);    //outputs: true ,(since, fruitsBox is an Array object. So, true)
//_____________________________________________________

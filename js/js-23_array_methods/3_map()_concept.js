//-> What is map() in JavaScript?
//-> :
//-> The map() method uses to Array Iteration.
//-> The map() method is used to transform each element of an array into a new value. It creates a new array with the transformed values without changing the original array.
//-> map() creates a new array from calling a function for every array element.

/*________________________________________________
Syntax:

array.map(function(currentValue, index, array) {
  // return new value
})
__________________________________________________*/
//-> * currentValue: The current element being processed.
//-> * index (optional): The index of the current element.
//-> * array (optional): The original array.


// example: 
const numberList = [1,2,3,4,5];

const squareList = numberList.map(x => x * x);
console.log(squareList);    //outputs: [ 1, 4, 9, 16, 25 ]

console.log(numberList);    //outputs: [ 1, 2, 3, 4, 5 ] (Original array stays as same)

//-> Here, the arrow function x => x * x transforms each element by squaring it.

//-> To understand about the Arrow function concept, do visit "3_arrow_function_concept.js" .


//-> The ??= Operator
//-> :
//->  The Nullish coalescing assignment operator is used between two values.

//-> If the first value is undefined or null, the second value is assigned.



let numValue1 = 0;  //numValue1 containing 0.
numValue1 ??= 5;
console.log(numValue1); //outputs: 0

let numValue2 = null;   //numValue2 containing null.
numValue2 ??= 5;
console.log(numValue2); //outputs: 5

let numValue3;  //numValue3 is undefined.
numValue3 ??= 10;
console.log(numValue3); //outputs: 10
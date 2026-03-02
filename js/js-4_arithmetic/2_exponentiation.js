//-> Exponentiation
//-> :
//->  The exponentiation operator (**) in JavaScript.

let numValue = 5;
let numValueSquare = numValue ** 2; //i.e. numValue^2 in general.

console.log(numValueSquare);    //outputs: 25




//-> x ** y produces the same result as " Math.pow(x,y) ":

let numberValue = 6;
let numberValueSquare = Math.pow( numberValue, 2 );

console.log(numberValueSquare);    //outputs: 36
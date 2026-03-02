//-> The toPrecision() Method
//-> :
//-> toPrecision() returns a string, with a number written with a specified length:

let num1 = 123.456;

// console.log(num1.toPrecision(0));   //specified length 0 , which is not allowded 

console.log(num1.toPrecision(1));   //specified length 1
//-> outputs: 1e+2  ,                                   (This is in exponential form. Hope you have not any confusion related to this meaning. Since, you have studied "3_toExponential().js")

console.log(num1.toPrecision(2));   //specified length 2
//-> outputs: 1.2e+2
console.log(num1.toPrecision(3));   //specified length 3
//-> outputs: 123
console.log(num1.toPrecision(4));   //specified length 4
//-> outputs: 123.5
console.log(num1.toPrecision(5));   //specified length 5
//-> outputs: 123.46
console.log(num1.toPrecision(6));   //specified length 6
//-> outputs: 123.456
console.log(num1.toPrecision(7));   //specified length 7
//-> outputs: 123.4560

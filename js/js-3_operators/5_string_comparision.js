//-> Types of JavaScript Operators:

//-> 4) JavaScript String Comparison
//-> :
//->  All the comparison operators above(i.e. 4_comparision_operators) can also be used on strings:



let num1 = "A";
let num2 = "B";

console.log(num1 < num2);   //outputs: true
//-> Since, "A" unicode value is less than "B"

//--------------------------------------------------------
//-> Note that : strings are compared alphabetically:
//--------------------------------------------------------


let num3 = "10";
let num4 = "2";
 
console.log(num3 < num4);   //outputs: true
//-> Here, "10" < "2" is happening. Since, they are string ,so there will be compared alphabetically 
//-> i.e. "1" < "2"
//-> and the unicode value of "1" is obviously smaller than "2".
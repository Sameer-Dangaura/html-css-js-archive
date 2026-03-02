//-> 1) Implicit conversion (Automatic conversion):

//-> e) undefined used with number, boolean, or null
//-> :
//->  Utilizing undefined in numeric, boolean, or null operations yields  NaN,
//-> indicating an undefined or unrepresentable value.

let undefinedNum = undefined + 10;

console.log(undefinedNum);  //outputs: NaN
console.log(typeof undefinedNum);   //outputs: number
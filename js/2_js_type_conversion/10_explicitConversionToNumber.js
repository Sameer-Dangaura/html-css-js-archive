//-> //-> 2) Explicit conversion (Type casting):

//-> a) Convert to Number explicitly
//-> :
//->  This involves explicitly converting a value to a numeric type using the    Number()   function.

let stringNumber = "52";
let numValue = Number(stringNumber);
console.log(numValue);  //outputs: 52 (string number converted to number)
console.log(typeof numValue);   //outputs: number
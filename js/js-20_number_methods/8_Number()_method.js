//-> The Number() Method                                (is also done in "2_js_type_conversion/8_convertingDateToNumbers.js and 10_explicitConversionToNumbers.js")

//-> :
//-> The Number() method can be used to convert JavaScript variables to numbers:

console.log(Number(true));  //outputs: 1
console.log(Number(false));  //outputs: 0
console.log(Number("10"));  //outputs: 10
console.log(Number('10'));  //outputs: 10

//-> Q. why you are passing parameters as string only ? why not numbers.
//-> Okey, let's see:
console.log(Number(10));  //outputs: 10 ,(You dumb. If parameter is already is in number format then, why you are trying to convert it again into number form using       Number()    method .)  

console.log(Number("10.3"));    //outputs: 10.3


//___________________________________________________
//->  If the number cannot be converted, NaN (Not a Number) is returned.
//-> E.g: do visit "2_js_type_conversion/4_NaN.js"
//___________________________________________________

console.log(Number("10,33"));   //outputs: NaN
console.log(Number("10 33"));   //outputs: NaN
console.log(Number("Hi"));   //outputs: NaN

//-> NaN - Not a Number                                 
//-> :
//__________________________________________________
//-> (Do visit: "2_js_type_conversion/4_NaN.js and 3_implicitConversionToNumber.js" also) .
//__________________________________________________

//-> NaN is a JavaScript reserved word indicating that a number is not a legal number.

//-> Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

let num = 10 / "Hi" ;
console.log(num);   //outputs: NaN
console.log(typeof num);    //outputs: number





//-> However, if the string is numeric, the result will be a number:
let num2 = 10 / "10";
console.log(num2);  //outputs: 1
console.log(typeof num2);   //outputs: number




//-> You can use the global JavaScript function isNaN() to find out if a value is a not a number:
console.log(isNaN(num)); //outputs: true
console.log(isNaN(num2));    //outputs: false

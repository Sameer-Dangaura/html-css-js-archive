//-> Types of JavaScript Operators:

//-> 3) JavaScript Comparison Operators
//-> :

//--------------------------------------------------------
// Operator	    Description
// -------      -----------
// ==	        equal to
// ===	        equal value and equal type
// !=	        not equal
// !==	        not equal value or not equal type
// >	        greater than
// <	        less than
// >=	        greater than or equal to
// <=	        less than or equal to
// ?	        ternary operator , (done in "js-43_Maps/3_Map.groupBy().js")
//--------------------------------------------------------
//-> For ==  and === comparision operators you can visit "2_js_type_conversion/14_comparisonCoercion.js".
//--------------------------------------------------------


//-> not equal operator:
const number1 = 2;
const number2 = 4;
console.log(number1 != number2);    //outputs: true

//-> not equal value operator or not equal type operator:
const num1 = 5;
const num2 = 10;
console.log(num1 !== num2); //outputs: true


//-> Hmm... Nothing happened different. Then why not equal value operator(!==) is introduced ?
//-> ans:
//-> Haha... My friend you don't know where not equal operator(!=) gets fooled and unable to determine which is correct or not.
//-> e.g:

//-> using not equal operator:

let myNumber1 = 3;  //number type
let myNumber2 = "3";    //string type
console.log(myNumber1 != myNumber2);    //outputs: false
//-> Here, not equal operator(!=) does not check their type and gets fooled.


//-> using not equal type operator:

let myNumber3 = 5;  //number type
let myNumber4 = "5";    //string type
console.log(myNumber3 !== myNumber4)    //outputs: true
//->Here, not equal type operator does check their type also and hence it displays: true.

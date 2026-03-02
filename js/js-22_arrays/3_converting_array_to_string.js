//-> Converting an Array to a String
//-> :
//-> The JavaScript method      toString()   converts an array to a string of (comma separated) array values.

//_____________________________________________
//-> The    toString()      method is also discussed a lot of there: "js-18_numbers/9_hexadecimal.js", "js-20_number_methods/2_toString().js"
//_____________________________________________

//-> Create an array:
const fruits = ["apple", " banana", " orange"];

//-> convert array to string:
const text1 = fruits.toString();
console.log(text1); //outputs: apple, banana, orange
console.log(typeof text1); //outputs: string

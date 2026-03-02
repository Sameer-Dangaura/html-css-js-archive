//-> JavaScript Booleans as Objects
//-> :
//-> Normally JavaScript booleans are primitive values created from literals:
let myBoolean1 = false;
console.log(myBoolean1);    //outputs: false
console.log(typeof myBoolean1);  //outputs: boolean


//-> But booleans can also be defined as objects with the keyword new:
const myBoolean2 = new Boolean(false);
console.log( myBoolean2 );  //outputs: [Boolean: false]
console.log(typeof myBoolean2); //outputs: object



/*________________________________________________________
- Do not create Boolean objects.

- The new keyword complicates the code and slows down execution speed.

- Boolean objects can produce unexpected results:

(for == and === comparisions, do visit "2_js_type_conversion/14_comparisonCoercion.js")


- For more, do visit : w3schools.

- Comparing two JavaScript objects always return false.
________________________________________________________*/


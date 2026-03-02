//-> var  hoisting
//-> :
//->  Variables defined with   var    are hoisted to the top and can be initialized at any time.

//--------------------------------------------------------
//-> Meaning: You can use the variable before it is declared:
//--------------------------------------------------------

console.log(carName);   //outputs: undefined
carName = "BMW";
console.log(carName);   //outputs: BMW

var carName; //Here, declaring variable carName using  var




//--------------------------------------------------------

//-> let   hoisting
//-> :
//->  Variables defined with let are also hoisted to the top of the block, but not initialized.

//--------------------------------------------------------
//-> Meaning: Using a let variable before it is declared will result in a ReferenceError:
//--------------------------------------------------------

console.log(bikeName);   //outputs: ReferenceError: Cannot access 'bikeName' before initialization

bikeName = "Duke";

console.log(bikeName);  //ReferenceError: Cannot access 'bikeName' before initialization

let bikeName;//Here, declaring variable bikeName using let

//-> With   let ,  you cannot use a variable before it is declared.
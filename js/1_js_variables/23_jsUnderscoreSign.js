//-> JavaScript Underscore (_):

//-> Since JavaScript treats underscore as a letter, identifiers containing  _  are valid variable names:

//-> Example-1:

let _temporaryVariable = 'Temporary variable';

console.log(_temporaryVariable);    //outputs: Temporary variable


function _privateFunction(){
    console.log("This is a message from function"); //displaying message inside function.
}

//-> calling function:
_privateFunction();    //outputs: This is a message from function




//-> Example-2:

let _myNum = 2;
let _100 = 3;   //starting with underscore is treated as a letter in JavaScript names.

console.log(_myNum + _100); //outputs: 5



//-> Using the underscore is not very common in JavaScript,
//-> but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.
//-> Block Scope
//-> :
//->  Before ES6 (2015), JavaScript did not have Block Scope.

//-> JavaScript had Global Scope and Function Scope.

//-> ES6 introduced the two new JavaScript keywords: let and const.
//-> These two keywords provided Block Scope in JavaScript:


//-> Variables declared inside a { } block cannot be accessed from outside the block:

{
    let myValue = 2;
    console.log(myValue);   //outputs: 2
}

//console.log(myValue);   // ReferenceError: myValue is not defined
//-> cannot access from out of the block scope which is good behaviour.
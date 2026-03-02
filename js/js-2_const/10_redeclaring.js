//-> Redeclaring
//-> :
//->  Redeclaring a JavaScript   var    variable is allowed anywhere in a program:


var numVariable = 20;

//-> redeclaring    var     variable:
var numVariable = -40;

console.log(numVariable);   //outputs: -40
//-> It can override original value, which is bad behaviour.



//--------------------------------------------------------

//-> Redeclaring an existing   var   or   let   variable to   const ,  in the same scope, is not allowed:

var myNumber = 25;  //allowed
const myNumber = 55;    //not allowed

{
    let myNumber = 15;  //allowed
    const myNumber = 30;    //not allowed
}

{
    const myNumber = 49;    //allowed
    const myNumber = -49;   //not allowed
}
//-> Terminal: SyntaxError: Identifier 'myNumber' has already been declared
//-> It prevents from overriding the original value, which is good behaviour.






//--------------------------------------------------------

//-> Reassigning an existing   const    variable, in the same scope, is not allowed:

const favNum = 30;  //allowed
favNum = 10;    //not allwed
var favNum = 22;    //not allowed
let favNum = 76;    //not allowed
const favNum = 99;  //not allowed

{
    const favNum = 30;  //allowed
    favNum = 10;    //not allowed
    var favNum = 22;    //not allowed
    let favNum = 76;    //not allowed
    const favNum = 99;  //not allowed
}
//-> Preventing from the overriding the original value, which is good bahaviour.




//--------------------------------------------------------

//-> you can redeclare    const     variable in another scope or another block is allowed:

const numValue = 10;
//Here, numValue is 10 for the global scope.
console.log(numValue);  //outputs: 10

{
    const numValue = 2;
    //Here, numValue is 2 for this block scope.
    console.log(numValue);  //outputs: 2
}

{
    const numValue = 30;
    //Here, numValue is 30 for this block scope.
    console.log(numValue);  //outputs: 30
}

//Here, numValue is 10. Since we are accessing it from global scope.
console.log(numValue);  //outputs: 10

//Here, In this example 'numValue' for the global scope and 'numValue' for each their own block scope are working as different variables.

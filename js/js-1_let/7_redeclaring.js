//-> Redeclaring
//-> :
//->  Redeclaring a JavaScript variable with    var    is allowed anywhere in a program:

var numVariable1 = 0;
//-> Here, numVariable1 is 0.

var numVariable1 = 56;
//-> now numVariable1 is 56.

console.log(numVariable1);   //outputs: 56
//-> which is again a bad behaviour of   var  .
//-> It can override the original value.


//--------------------------------------------------------


//-> With   let , redeclaring a variable in the same block is NOT allowed:

var numVariable2 = 10;  //allowed
let numVariable2 = 5;   //not allowed

{
    var numVaraible2 = 100; //allowed
    let numVariable2 = 44;  //not allowed
}

{
    var numVaraible2 = 30;  //allowed
    let numVaraible2 = 88;  //not allowed
}
//-> Terminal: SyntaxError: Identifier 'numVariable2' has already been declared



//--------------------------------------------------------

//-> Redeclaring a variable with    let ,  in another block, IS allowed:

let numVariable3 = 13;  //allowed
//Here, numVariable3 is 13 for the global scope.
console.log(numVariable3);  //outputs: 13

{
    let numVariable3 = 20;  //allowed
    //Here, numVariable3 is 20 for this block scope.
    console.log(numVariable3);  //outputs: 20
}

{
    let numVariable3 = 45; //allowed
    //Here, numVariable3 is 45 for this block scope.
    console.log(numVariable3);  //outputs: 45
}

//Here, numVariable3 is 13 for the global scope.
console.log(numVariable3);  //outputs: 13

//Here, numVariable3 for global scope and numVariable3 for each their block scope are working as different variables.
//-> Redeclaring Variables in different scope
//-> :
//->  Redeclaring a variable using the   var    keyword can impose problems.

//-> Redeclaring a variable inside a block will also redeclare the variable outside the block:


var numVariable = 2;
//-> Here, numVariable is 2

{
    var numVariable = 9;
    //-> Here, numVariable is 9
}

//-> Here, now numVarible is 9
console.log(numVariable);   //outputs: 9
//-> Since,  var   is not block scope so, using   var   , redeclaring variable inside block is also redeclaring outside the block,
//-> which is actually a problem.




//--------------------------------------------------------

//-> Redeclaring a variable using the   let    keyword can solve this above problem using   var .

//-> Redeclaring a variable inside a block will not redeclare the variable outside the block:

let numberVariable = 3;
//-> Here, numberVariable is 3

{
    let numberVariable = 12;
    //-> Here, numberVariable is 12 for this block scope.
    console.log(numberVariable) //outputs: 12
}

//-> Here, numberVariable is 3 
console.log(numberVariable);    //outputs: 3
//-> Since,  let    is block scope so , using    let    redeclaring variable inside the block is not redeclaring the outside of the block.
//-> So, there is numberVariable for global scope and numberVariable for block scope are working as different variables.
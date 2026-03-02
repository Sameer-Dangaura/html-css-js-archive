//-> JavaScript Function Syntax
//-> :
//->  A JavaScript function is defined with the             function      keyword, followed by a name, followed by parentheses ().

//___________________________________________________
//->syntax of function:

// function functionName( parameter1, parameter2, ...){
//     //code to be executed
// }

//___________________________________________________

//-> Function parameters are listed inside the parentheses () in the function definition.

//-> Function arguments are the values received by the function when it is invoked.

//-> Inside the function, the arguments (the parameters) behave as local variables.

//__________________________________________________
//-> Tip:
//->In Js, function parameter do not have a variable declaration keyword such as: var, let const.
//__________________________________________________

//->Example:

function myMultiplication( value1, value2){
    return value1 * value2;
}

console.log("3","*","5","= ", myMultiplication(3, 5) );
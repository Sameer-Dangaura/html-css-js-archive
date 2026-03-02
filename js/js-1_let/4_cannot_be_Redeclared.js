//-> Cannot be Redeclared in same scope
//-> :
//->  Variables defined with   let    can not be redeclared.

//-> You can not accidentally redeclare a variable declared with   let .

//-> With   let    you can not do this:
 
let myVariable = "my string";

//let myVariable = 0; //Interpreter: Cannot redeclare block-scoped variable 'myVariable'.
//-> which is good behaviour. 
//-> prevents from overriding the original value.



//--------------------------------------------------------

//-> Variables defined with   var    can be redeclared.
//-> With    var    you can do this:

var myOwnVariable = "my string";

var myOwnVariable = 10;
console.log(myOwnVariable); //outputs: 10
//-> It can override the original value which is bad behaviour.
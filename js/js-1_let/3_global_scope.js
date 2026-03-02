//-> Global Scope
//-> :
//->  Variables declared with the   var    always have Global Scope.

//-> Variables declared with the   var    keyword can NOT have block scope:


//-> Variables declared with   var    inside a { } block can be accessed from outside the block:

{
    var myValue = 2;
    console.log(myValue);   //outputs: 2
}

console.log(myValue);   //outputs: 2
//-> can accessed from outside of the block scope which is bad behaviour. 
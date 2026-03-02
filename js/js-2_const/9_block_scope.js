//-> Block Scope
//-> :
//->  Declaring a variable with   const    is similar to    let    when it comes to Block Scope.

//-> The 'myValue' declared in the block, in this example, is not the same as the 'myValue' declared outside the block:


const myValue = 10;
//Here, myValue is 10 for the global scope.
console.log(myValue);   //outputs: 10

{
    const myValue = 50;
    //Here, myValue is 50 for this block scope.
    console.log(myValue);   //outputs: 50
}

//Here, we get myValue is 10 , since we are accessing from the global scope.
console.log(myValue);   //outputs: 10
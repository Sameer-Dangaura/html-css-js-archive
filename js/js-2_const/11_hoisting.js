//-> Hoisting
//-> :
//->  Variables defined with   const    are also hoisted to the top, but not initialized (Same as   let ).

//-> Meaning: Using a   const    variable before it is declared will result in a ReferenceError:


console.log(carName);   //outputs: ReferenceError: Cannot access 'carName' before initialization
const carName = "Volvo";    
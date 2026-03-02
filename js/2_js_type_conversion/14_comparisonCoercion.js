//-> 4) Comparison Coercion
//-> :
//->  In JavaScript, comparison operators ( ==  and  === )
//-> perform type coercion.

//-> The  ==  operator coerces values to the same type before comparison,
//-> while  ===  strictly compares values without coercion.

//-> Example:

console.log(10 == "10");    //outputs: true (numeric to string coercion)
console.log(typeof(10 == "10"));    //outputs: boolean


console.log(10 === "10");   //outputs: false (strict comparison without coercion)
console.log(typeof(10 === "10"));   //outputs: boolean
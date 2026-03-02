//-> Interpolation
//-> :
//-> Template String provide an easy way to interpolate variables and expressions into strings.

//-> This method is called string interpolation.
//_________________________
//-> The syntax is:
//                  ${...}
//_________________________


//-> Variable substitution
//-> :
//-> Template Strings allow variables in strings:
//-> Automatic replacing of variables with real values is called string interpolation.

let firstName = "John"; //string variable
let lastName = "Doe";   //string variable
let aka = 907;  //number variable
//-> aka stands for also known as.

let text = `Hello, ${firstName} ${lastName} a.k.a. ${aka}`;
console.log(text);  //outputs: Hello, John Doe a.k.a. 907
console.log(typeof text);   //outputs: string



//-> Expression Substitution
//-> :
//-> Template Strings allow expressions in strings:
let NoodlesPrice = 10;
let VAT = 0.25;

let total = 
    `Total: ${(NoodlesPrice * (1 + VAT)).toFixed(2)}`;
//             |_______________________|
//                        |
//                  is an expression.

console.log(total); //outputs: Total: 12.50
console.log(typeof total);  //outputs: string

//-> Automatic replacing of expressions with real values is called string interpolation.

//_____________________________________________________
//-> Q. What is .toFixed(2) ?
//-> Ans:

// This converts the number to a string with exactly two decimal places.
//______________________________________________________

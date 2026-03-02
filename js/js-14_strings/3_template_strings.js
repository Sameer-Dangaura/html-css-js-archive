//-> Template Strings
//-> :
//-> Templates were introduced with ES6 (JavaScript 2016).

//-> Templates are strings enclosed in backticks (`This is a template string`).

//-> Templates allow single and double quotes inside a string:

let text7 = `He's often called as "Johnny"`;
console.log(text7); //outputs: He's often called as "Johnny"
console.log(typeof text7);  //outputs: string



/*_____________________________________________________
Q. Why the template strings are introduced ?
Ans:

Template strings (also called template literals) were introduced in JavaScript (ES6) to provide a more convenient and readable way to work with strings.

You will learn more about it in further chapters.
_______________________________________________________*/




//-> Templates allow multiline strings
//-> :

//-> without template strings:
//let text8 = "He is 
            // a good player"; 
//SyntaxError: Invalid or unexpected token


//-> with template strings: 
let text9 = `He is
            a good player`;

console.log("\n", text9); 
/*outputs:  He is
            a good player
*/

/*______________________________________________________
Why Strict Mode?
:
Strict mode makes it easier to write "secure" JavaScript.

Strict mode changes previously accepted "bad syntax" into real errors.

As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

________________________________________________________*/


//-> Not Allowed in Strict Mode
//-> :

//-> i) Using a variable, without declaring it, is not allowed:

"use strict";  //try to see with and without  making commenting this line

x = 3.14; //ReferenceError: x is not defined
console.log(x);



//-> ii) Objects are variables too. Using an object, without declaring it, is not allowed:
 
obj = {
    name: "object-1",
    index: 1
};
//-> outputs: ReferenceError: obj is not defined
console.log(obj);



//-> iii) Deleting a variable (or object) is not allowed.
delete x;
delete obj;
// console.log(x);
// console.log(obj);



//-> iv) Deleting a function is not allowed.



//-> v) Duplicating a parameter name is not allowed:
function myFunction(p1, p1){
    console.log("function executed even having duplicate parameters");
}

myFunction(); //SyntaxError: Duplicate parameter name not allowed in this context



//-> vi) Octal numeric literals are not allowed.



//-> ✅For more, do visit to further files...





//-> x) For security reasons, eval() is not allowed to create variables in the scope from which it was called.
//-> For more about eval(), do search: JavaScript eval()


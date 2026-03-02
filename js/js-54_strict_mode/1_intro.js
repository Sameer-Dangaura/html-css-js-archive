//-> Javascript use strict
//-> :
//->  "use strict"; Defines that JavaScript code should be executed in "strict mode".


/*____________________________________________________ 
You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables.

"use strict" is just a string, so IE 9 will not throw an error even if it does not understand it.
______________________________________________________*/


"use strict";

x = 3.14;  // This will cause an error (x is not defined).
//-> outputs: ReferenceError: x is not defined


myFunction();

function myFunction(){
    y = 3.14; // This will cause an error (y is not defined)
}
//-> outputs: ReferenceError: y is not defined



//___________________________________________
//-> ➡️ For more, do MUST visit: w3schools.
//___________________________________________



//-> Declaring Strict Mode
//-> :
//-> ✅ Declared at the beginning of a script, makes it a  global scope (all code in the script will execute in strict mode): ⬆️(see above)

//-> ✅ Declared inside a function, makes it a local scope (only the code inside the function is in strict mode)



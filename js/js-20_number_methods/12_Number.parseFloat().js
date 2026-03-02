//-> The Number.parseFloat() Method
//-> :
//-> Number.parseFloat() parses a string and returns a number.

//-> Spaces are allowed. Only the first number is returned:


/*________________________________________________________
 Note :
------
:
The Number methods Number.parseInt() and Number.parseFloat()

are the same as the

Global methods parseInt() and parseFloat().


The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser).

* Modularization:
- parseFloat() was originally a global function, but        Number.parseFloat()      keeps it grouped inside Number, making it more modular.

So, there is no difference.
________________________________________________________*/

console.log(Number.parseFloat("-10.5"));  //outputs: -10.5
console.log(Number.parseFloat("-10"));  //outputs: -10
console.log(Number.parseFloat("10"));  //outputs: 10
console.log(Number.parseFloat("10.5"));  //outputs: 10.5
console.log(Number.parseFloat("10,5"));  //outputs: 10
console.log(Number.parseFloat("10 5"));  //outputs: 10
console.log(Number.parseFloat("10years"));  //outputs: 10
console.log(Number.parseFloat("years 10"));  //outputs: NaN



//-> Same thing with    Number.parseInt() .

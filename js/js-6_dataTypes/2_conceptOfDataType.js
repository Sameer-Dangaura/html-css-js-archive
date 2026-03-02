//-> The Concept of Data Types
//-> :
//-> In programming, data types is an important concept.

//-> To be able to operate on variables, it is important to know something about the type.

//-> Without data types, a computer cannot safely solve this:

let container1 = 16 + "Volvo";

//-> Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?

//-> JavaScript will treat the example above as:

let container2 = "16" + "Volvo";

console.log(container2);    //outputs: "16Volvo"
console.log(typeof container2); //outputs: string



//-------------------------------------------------------
//-> Note:
//->  When adding a number and a string, JavaScript will treat the number as a string.
//--------------------------------------------------------






//-> JavaScript evaluates expressions from left to right. Different sequences can produce different results:

//->This given below is for understanding purpose only, 
//->which is not considered as good practice...

let myValue1 = 15 + 5 + "Hello";
console.log(myValue1);   //outputs: '20Hello'
//-> Here, JavaScript treats 15 and 5 as numbers, until it reaches to "Hello".


let myValue2 = "Hello" + 15 + 5;
console.log(myValue2);   //outputs: Hello155
//-> Here, since the first operand is a string, all operands are treated as strings.
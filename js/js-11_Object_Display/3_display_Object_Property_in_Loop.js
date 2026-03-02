//-> Displaying Properties in a Loop
//-> :
//-> The properties of an object can be collected in a loop:


//Create an Object:
const person = {
    name: "John",
    age: 30,
    city: "New York"
};


//-> Build a text:
let text = "";

//-> The     in     keyword is part of the for...in loop syntax, which iterates over all enumerable properties of the person object. During each iteration, x is assigned the name of a property in the person object.
//-> which is used below:

for( let x in person){  //for...in loop
    text += person[x] + " ";
};

console.log(text);  //outputs: John 30 New York 



//-> Note:
//-> You must use person[x] in the loop.

//-> person.x will not work (Because x is the loop variable).


//________________________________________________________
//-> Q. How does above for...in loop working internally ?
//-> Ans:
 
//-> The loop starts, and x takes the first property name (key) of the person object.

//-> The loop body executes, and the value of person[x] (which is person["name"], then person["age"], etc.) is appended to text.

//-> The loop continues until all properties are processed.

//-> Once all properties are iterated over, the loop stops.


//________________________________________________________
//-> Q. How does above method is working ?
//-> Ans:

//-> At 1st the text is initialized as an empty string.

//-> A for...in loop is used to iterate over the properties of the person object,  using x and where,      -> x represents each property name (key) in the person object (name, age, city). And
//-> person[x] gives the value of each property ("John", 30, "New York") correspondence to x.

//-> These values are concatenated into the text variable with spaces.

//________________________________________________________

//-> If you have question about: when to use for...of loop and when to use for...in loop. Then, do visit "5_Concept_of_for_of_loop.js" and scroll down to the last.

//________________________________________________________

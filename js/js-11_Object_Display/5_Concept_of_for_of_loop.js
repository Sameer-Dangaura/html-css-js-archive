//-> How the for...of Loop Works in JavaScript
//-> :
//->  The for...of loop iterates over values of an iterable object like an array, string, or object-generated array (e.g., from Object.entries()).


//-> Basic Example: (Looping Over an Array)

//-> Create an Array:
let fruitsbox = ["Banana", "Orange", "Apple"];

for (let fruit of fruitsbox) { //for...of loop
  console.log(fruit);
}

//-> How it works:

//-> The loop goes through each element in the fruitsbox array.
//-> On each iteration, the 'fruit' variable gets the next value from the array named as 'fruitsbox' .
//-> The loop stops when all elements are visited.

/* 
outputs:
Banana
Orange
Apple
*/


//_________________________________________________



// for...of Loop with Strings
// Since a string is iterable, you can loop over its characters:


let word = "Hello";

for (let letter of word) {
  console.log(letter);
}

/*
Outputs:
H
e
l
l
o
*/


//_________________________________________________

//-> Using for...of with Object.entries()
//-> Objects are not directly iterable, but we can convert them into an array of key-value pairs using Object.entries():

//Create an Object:
const fruits = { 
  Bananas: 300, 
  Oranges: 200, 
  Apples: 500 
};

for (let [fruit, amount] of Object.entries(fruits)) {
  console.log(fruit + ": " + amount);
}

//-> How it works:

//-> Object.entries(fruits) converts the object into an array of key-value pairs.
//-> The loop extracts fruit (key) and amount (value) on each iteration.

/*
Outputs:

Bananas: 300
Oranges: 200
Apples: 500
*/


//_______________________________________________________

//-> Q. When to use for...of loop and 
//-> when to use for...in loop ?

//-> Ans:

//-> 1️⃣ for...of → Use When You Need Values
//-> :
// ✔ Use for...of when you need the actual values (like array elements).
// ✔ Works on iterable objects: Arrays, Strings, Maps, Sets.


//-> 2️⃣ for...in → Use When You Need Keys
//-> :
//-> ✔ Use for...in when you need property names (keys/indexes).
//-> ✔ Works on objects and arrays.

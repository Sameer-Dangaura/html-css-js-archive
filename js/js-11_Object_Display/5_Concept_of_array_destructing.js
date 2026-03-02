//-> Array Destructuring (Breaking Down an Array Easily)
//-> :
//->  Array destructuring is a feature in JavaScript that allows you to extract values from an array and assign them to variables in a simple way.


//-> Example: Without Destructuring
//-> Normally, to extract values from an array, you would do:

//-> At 1st create an array:
let fruits = ["Banana", "Orange", "Apple"];

//-> Now extract values normally:
let first = fruits[0];   // "Banana"
let second = fruits[1];  // "Orange"
let third = fruits[2];   // "Apple"

console.log(first, second, third); //outputs: Banana Orange Apple

//-> This method is long and repetitive.


//_________________________________________________


//-> Example: With Destructuring
//-> Using array destructuring, we can extract values in one line:


//-> Create an array:
let fruitsbox = ["Banana", "Orange", "Apple"];

//-> Now, extract in one line using destructuring:
let [first1, second2, third3] = fruitsbox; // Destructuring

console.log(first1, second2, third3); //outputs: Banana Orange Apple

// 👉 Here, first1 gets "Banana", second2 gets "Orange", and third3 gets "Apple".


//___________________________________________________


//-> Destructuring in for...of Loops
//-> :
//->  Now, let’s see destructuring in for...of loops:

//-> An empty text:
let text = "";

for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount + "<br>";
}


//-> Object.entries(fruits) gives us an array of key-value pairs, like:
/* [ 
      ["Bananas", 300], 
      ["Oranges", 200], 
      ["Apples", 500] 
   ]
*/


//-> The destructuring in the loop:

for (let [fruit, amount] of Object.entries(fruits)){}

// First iteration: fruit = "Bananas", amount = 300
// Second iteration: fruit = "Oranges", amount = 200
// Third iteration: fruit = "Apples", amount = 500

//-> Iterating Over a Map
//-> :
//-> You can use a for..of loop to iterate over the elements of a Map:

// Create a Map by Passing an Array to new Map()
const fruitsBox = new Map([
    ["apples", 200],
    ["banana", 100],
    ["graphes", 300]
]);

//-> Listing all elements with the help of for..of loop
for(let fruits of fruitsBox){
    console.log(fruits);
}

/* outputs:

[ 'apples', 200 ]
[ 'banana', 100 ]
[ 'graphes', 300 ]

*/

console.log(fruitsBox); 
//-> outputs: Map(3) { 'apples' => 200, 'banana' => 100, 'graphes' => 300 }



/*--------------------------------------------
🔷 Code Breakdown
_________________________
js code:
// Step 1: Creating a Map
const fruitsBox = new Map([
    ["apples", 200],
    ["banana", 100],
    ["graphes", 300]
]);
_________________________
✅ This creates a new Map with 3 entries:

Key	        Value
"apples"	200
"banana"	100
"graphes"	300

Unlike objects, Maps remember the insertion order of the keys.


🔁 Step 2: Looping through the Map
_____________________________
js code:
for(let fruits of fruitsBox){
    console.log(fruits);
}
_____________________________
This loop will go through each entry in the Map, and each    fruits   variable will hold an array of [key, value] for each item.

✅ Output:

[ 'apples', 200 ]
[ 'banana', 100 ]
[ 'graphes', 300 ]                                      */

//-> 💡 Want to get just keys or just values?
//-> let's try:
//-> to get keys using .keys() method.                    If you don't know about the  .keys()  methods, do visit "js-26_array_iteration/6_array_keys().js"
for(let key of fruitsBox.keys()){
    console.log(key);
}
/* outputs:
apples
banana
graphes
*/

//-> to get values with the help of .values() method
for(let value of fruitsBox.values()){
    console.log(value);
}
/* outputs:
200
100
300
*/ 


/*--------------------------------------------
-> Let's understaand about Map object , as we did tried to understand Set object in "2_iterating_over_Set.js" :

🗺️ What is a Map in JavaScript?
:
A Map is a collection of key-value pairs, just like an object, but with some key differences that make it more powerful in certain situations.


🔑 Key Features of Map
:
Feature	                     Description
--------                     ------------

Maintains Insertion Order -> Keys are iterated in the order they were added.

Any Type as Key	->           Unlike objects (where keys are always strings/symbols), a Map can use objects, functions, or primitive types as keys.

Size Property ->	         You can easily get the size using .size .

Iterable ->	                 You can loop through it using for...of directly.

Better performance ->	     Especially when adding/removing lots of entries.                               */

//________________________________
//-> 🧪 Creating and Using a Map:

//-> Create a Map by Passing an Array to new Map()
const myMap = new Map([
    ["fruit", "apple"]
]);

//-> Add values to Map(i.e.myMap) :
myMap.set("color", "red");
myMap.set("price", 200);
myMap.set(1, "Number quality");

console.log(myMap); 
/* outputs:
Map(4) {
  'fruit' => 'apple',
  'color' => 'red',
  'price' => 200,
  1 => 'Number quality'
}
*/

//-> Access values of Map(i.e.myMap) :
let accessValue = myMap.get("fruit");
console.log(accessValue); //outputs: apple

accessValue = myMap.get(1);
console.log(accessValue); //outputs: Number quality



//-> Check for key in Map(i.e. myMap) :
let checkKey = myMap.has("color");
console.log(checkKey); //outputs: true


//-> Check for value in Map(i.e.myMap) :
let checkValue = myMap.has("red");
console.log(checkValue); //outputs: false ,             (That means  .has()  methods only works to check key in Map)
/*
______________
-> 😮Note:

➡️  .has(value)  in Set
- A Set stores unique values only (no key-value structure).
So,  .has(value)  checks if a value exists in the set (which is already done in             "2_investigation_on_Set/1_.has(value)_n_more_things.js").


➡️  .has(value)  in Map
A Map stores key-value pairs.
So  .has(value)  checks if a key exists in the map.     

________________                                        */


//-> Get size of Map:
console.log(myMap.size); //outputs: 4

//-> Delete a key:
myMap.delete("color");
console.log(myMap);
/* outputs:
Map(3) { 'fruit' => 'apple', 'price' => 200, 1 => 'Number quality' }
*/


/*
⚠️ Map vs Object Summary:

Feature	        Object	                        Map

Key Types->	    Strings/Symbols only	        Any type

Iteration order-> Not guaranteed	            Insertion order

Easily iterable->❌ Needs Object.keys/entries	✅ Yes

Get size->	    ❌ Hard (Object.keys().length)	✅ .size

Suitable for frequent updates->	❌	            ✅ Yes



✅ When to Use Map?
Use Map when:

- You need key-value storage with keys of any type (even objects).

- You care about the insertion order.

- You frequently add/remove elements.



🧐🛠️ Use Case Examples
:
- Maps of data: user ID to user info, product to price, etc.

- Storing metadata for objects

- Caches or memoization                                 (for this real implementation, do visit "3_more_on_Map/2_caches_or_memoization.js")

- Counting things (e.g., how many times a word appears)


*/




//-> Let's see, can we access Map object properties as an object:
console.log(myMap.price); //outputs: undefined



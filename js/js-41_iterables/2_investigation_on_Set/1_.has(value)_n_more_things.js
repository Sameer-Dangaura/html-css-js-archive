//-> Note that this "2_investigation_on_Set/(any files)" might correlate with "js-41_iterables/2_iterating_over_Set.js". So make sure, you have visited that 2_iterating_over_Set.js file.

/*--------------------------------------------------------


➡️ Let's do more investigation on Set:

Q. As you mentioned above: Useful in checking for the presence of an item quickly using .has(value). what does that mean and where it is helpful ?
Ans:
----

🔹 What is .has(value)?
:
The     .has(value)   method checks if a specific value exists in a Set.

js code:                                                */

//-> Create a Set by Passing an array to new Set()
const mySet = new Set(["apple", "banana", "cherry"]);

console.log(mySet.has("banana"));  // ✅ true
console.log(mySet.has("orange"));  // ❌ false

/*🔹 Why is it Useful?
:
Because  .has()  gives you a quick and efficient way to check if something exists without looping through the whole Set manually.


✅ Use Cases:                                           */
//________________________________
//-> 1) Checking user permissions:

const permissions = new Set(["Read", "Write"]);

if(permissions.has("Write")) {
    console.log("Writing permission is allowed to user");
}
//_________________________________

//-> 2) Avoiding duplicates:

const isSeen = new Set(["Bike", "Car"]);

function processValue(value) {  //user defined function
    if(!isSeen.has(value)){
        isSeen.add(value);  //adding value to set
        console.log("Processing:", value);
    }
    else{
        console.log("Already processed:", value);
    }
}

processValue("Bike");//function call having "Bike" argu.
processValue("Jeep");//function call having "Jeep" argu.
processValue("Car");//function call having "Car" argu.
processValue("Iphone");//function call having "Iphone" argument

console.log(isSeen);    
//-> outputs: Set(4) { 'Bike', 'Car', 'Jeep', 'Iphone' }

//________________________________

//-> 3) Fast lookup (much faster than array includes):

const myArray = new Array(1, 2, 3);
const mySet1 = new Set([1, 2, 3]);

console.log("\n");
console.log(myArray.includes(5));
console.log(myArray.includes(2));

console.log(mySet1.has(5));
console.log(mySet1.has(2));


//-> 🤔🤔An array can use  .has(value) or not?

//-> : Let's see:
// console.log(myArray.has(5));//TypeError: myArray.has is not a function


//-> That means, ❌ not.    Arrays cannot use .has(value).
//-> The   .has()   method is only for Sets and Maps in JavaScript — not for Arrays.✅


/* 
🔹 Comparison Set and Arrays
-----------------------------

Feature	        Array	        Set

Duplicates:  	Allowed	        Not allowed
.includes(): 	Slower lookup	.has() is faster
Order:	        Maintained	    Maintained



🔹 In Summary
.has(value) is:

✅ Simple

✅ Fast

✅ Reliable

It’s helpful when you need to track unique items and quickly check if a value exists — such as tags, IDs, visited elements, permissions, etc.




----------------------------------------------------------

Q. When to use array and when to use set ?
Ans:
----

🔷 Use Array when:
✅ You care about order, including duplicates.
✅ You need index-based access (like arr[0], arr[1], etc.).
✅ You might sort, filter, or map the data.
✅ You may allow duplicate values.
✅ You need to perform array-specific operations like .map(), .filter(), .reduce(), etc.

Example use cases:
- A list of products.
- A collection of comments in order.
- A playlist of songs (even if some songs repeat).



🔷 Use Set when:
✅ You need only unique values.
✅ You want fast lookups using .has(value) (especially for large data).
✅ You don’t care about the index or order that much.
✅ You want to quickly remove duplicates.

Example use cases:
- Checking for unique usernames.
- Storing a set of permissions.
- Keeping track of visited items.
- Removing duplicates from an array.



🔸 Summary Table:
-----------------

Feature	            Array	                  Set

Allows duplicates	✅ Yes	                ❌ No

Maintains order	    ✅ Yes	                ✅ (in  insertion order)

Index access	    ✅ Yes (arr[0])	        ❌ No direct access by index

Fast .has() lookup	❌ Slow	                ✅ Fast

Built-in methods: Many (map, filter, reduce)	Fewer (add, delete, has, etc.)




___________________                                     */
//->👀 Real-World Tip:
//->➡️You can even convert an array to a Set to remove duplicates:                      

//-> Create an array:
const myArray1 = ["a", "b", "c", "a", "d", "b"];

//-> Create a Set by Passing an array(i.e. myArray1) to new Set() to remove duplicates and again create an array(i.e. myArray2) using already created Set by using spread operator:                                              (if you don't know about spread operator, do visit "js-26_array_iteration/8_array_spread_(...).js")
const myArray2 = [...new Set(myArray1)];   

console.log("\n");
console.log(myArray2);  //outputs: [ 'a', 'b', 'c', 'd' ]

/* Let's see,
🔁 Visual Flow:

myArray1:       ["a", "b", "c", "a", "d", "b"]
     ↓
new Set:   Set { 'a', 'b', 'c', 'd' }  // duplicates gone
     ↓
spread:    [ 'a', 'b', 'c', 'd' ]   // back to array form


*/


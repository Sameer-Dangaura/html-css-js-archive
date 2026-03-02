//-> Iterating Over a Set
//-> :
//-> You can use a for..of loop to iterate over the elements of a Set:

//-> Create a Set by Passing an array to new Set()
const letters = new Set(["a", "b", "c"]);

//-> Listing all elements with the help of for..of loop
for(let x of letters) {
    console.log(x);
}

/* outputs: 
a
b
c
*/

console.log(letters); //outputs: Set(3) { 'a', 'b', 'c' }


/*-----------------------------------------------
-> Let's breakdown above code to understand:

🔹 What is a Set?
:
A Set is a collection of unique values—no duplicates allowed.
______________________________________
js code:
const letters = new Set(["a", "b", "c"]);
______________________________________
This creates a new Set with 3 unique string elements: "a", "b", and "c".

- Even if you try to add "a" again, it will not be added because Sets only store unique values.


🔹 Syntax Breakdown
________________________
js code:
for (let x of letters) {
    console.log(x);
}
________________________
for...of is used to loop through the values of an iterable like Set, Array, Map, etc. (which is also discussed in "js-41_iterables/1_intro.js")

x will hold each value ("a", then "b", then "c") as it loops through the Set.

console.log(x) will print each of these values one by one.

🔹 Output:
a
b
c

✅ Order is preserved — in the order the values were added.

__________________
🔹 Why Use a Set?
:
- To remove duplicates from arrays easily.

- To store non-repeating elements.

- Useful in checking for the presence of an item quickly using   .has(value)  .

------------------------------------------------*/



//-> To understand about more on Set, do visit "2_investigation_on_Set"


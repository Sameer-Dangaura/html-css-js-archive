> Different Kinds of Loops
:
- JavaScript supports different kinds of loops:


__________________________________________________________
1) for 
: loops through a block of code a number of times
# (Also done in "js-22_arrays/7_looping_array_element.js")
__________________________________________________________


__________________________________________________________
2) for/in 
: loops through the properties of an object
# (Also done in "js-11_Object_Display/3_display_Object_Property_in_Loop.js")
- For more, do visit "w3schools"

--------------------------------------------------
- Do not use for...in over an Array if the index order is important.

The index order is implementation-dependent, and array values may not be accessed in the order you expect.

> Q. Why Should You Avoid for...in for Arrays If Index Order Matters?
- The statement "Do not use for...in over an array if the index order is important." is said because for...in does not guarantee the order of iteration over an array.

🔹 Issue with for...in on Arrays
When using for...in on an array:

It iterates over all enumerable properties, including manually added properties (if any).

It does not guarantee numeric index order, which can lead to unexpected results.

🔹 Example: Unexpected Order in for...in
__________________________________
javascript code:
const fruits = ["Banana", "Orange", "Apple", "Mango"];

for (let index in fruits) {
  console.log(index, fruits[index]); 
}
__________________________________

✅ This may work as expected in some cases, but...

🔴 Potential Issues:

JavaScript does not guarantee that indices will be visited in order (0, 1, 2, 3).

If someone adds a new property to the array, for...in will include it in the loop.

Example with Extra Properties:
_______________________________
javascript code:
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.color = "Yellow"; // Adding a property

for (let index in fruits) {
  console.log(index, fruits[index]); 
}
________________________________

💥 Output (Unexpected Behavior):

0       Banana
1       Orange
2       Apple
3       Mango
color   Yellow  ❌ Extra property included!


⚠️ The for...in loop included the color property, which is not an actual array element!

# It is better to use a for loop, a for...of loop, or Array.forEach() when the order is important.
__________________________________________________________


__________________________________________________________
3) for/of 
: loops through the values of an iterable object
# (Also done in "js-11_Object_Display/5_Concept_of_for_of_loop.js")

> To know about more for..of loop , do visit "js-43_Maps/3_Map.groupBy().js" .
__________________________________________________________


__________________________________________________________
4) while 
: loops through a block of code while a specified condition is true


5) do/while 
: also loops through a block of code while a specified condition is true
__________________________________________________________


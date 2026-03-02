/*______________________________________________________
Q. console.log(fruit, ",", fruit4);    vs 
console.log(fruit11 + ", " + fruit12); 
which is preferable and better one ?


ChatGPT said:
Both console.log(fruit, ",", fruit4); and console.log(fruit11 + ", " + fruit12); will output something similar, like:
_______________
apple , banana
_______________
However, they work slightly differently and are suited for different use cases:


✅ console.log(fruit, ",", fruit4);
Pros:

* Automatically inserts spaces between arguments.
* More readable when logging multiple variables.
* Handles non-strings (e.g., numbers, objects) better without manual conversion.

Example:
_______________________________________
let fruit = "apple", fruit4 = "banana";
console.log(fruit, ",", fruit4); // apple , banana
_______________________________________



🔧 console.log(fruit11 + ", " + fruit12);
Pros:

* Gives you full control over formatting (e.g., no automatic space).

* Better if you're building a formatted string for display or further use.

Cons:

You must ensure all operands are strings (or get type coercion).

Example:
__________________________________________
let fruit11 = "apple", fruit12 = "banana";
console.log(fruit11 + ", " + fruit12); // apple, banana
__________________________________________

✅ Which is better?
For debugging or logging variables: use console.log(fruit, ",", fruit4);

For formatted strings (e.g., for UI or messages): use + or template literals like `${fruit}, ${fruit4}`

_______________________________________________________*/


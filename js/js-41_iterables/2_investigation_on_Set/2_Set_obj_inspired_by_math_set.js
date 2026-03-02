/*

Q. Is Set object is that mathematical set which we used to do set operations in schools ?
Ans:
---

Yes! Great observation — and you’re absolutely right! ✅

JavaScript's Set object is inspired by the mathematical concept of a set — just like the ones you learned in school. Let’s connect those dots:



📘 In Math Class:
-----------------
A set is:

- A collection of distinct elements (no duplicates).

- The order doesn't matter.

- You can perform operations like:

 * Union (combine two sets)

 * Intersection (common values)

 * Difference (what's in one set but not the other)




🧠 In JavaScript:
-----------------
A Set object behaves similarly:                         */

//-> Create a Set by Passing an array to new Set()
const mySet = new Set([2, 1, 3]);

mySet.add(6);
mySet.add(2);  // duplicate! won't be added again
mySet.add(5);
mySet.add(1);  // duplicate! won't be added again

console.log(mySet); //outputs: Set(5) { 2, 1, 3, 6, 5 }

//-> ✅ Only unique values are stored, just like in math.



/*
🛠️ You can even simulate Set operations:               */

//-> 1)✅Union: 
//-> 🤔 For this, concept is that just expand both sets 
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([7, 3, 6, 5]);

const unionSet = new Set([...setA, ...setB]);
console.log(unionSet); 
//-> outputs: Set(7) { 1, 2, 3, 4, 7, 6, 5 }



//-> 2)✅Intersection:
//-> For this, concept is that show only those elements of setA which are in setB
const intersectionSet = 
new Set([...setA].filter(x => setB.has(x)));  

//-> if you don't know about arrow function, do visit "js-23_array_methods/3_arrow_function_concept.js".
//-> if you don't know about filter function, do visit "js-26_array_iteration/2_array_filter().js" .

console.log(intersectionSet); //outputs: Set(1) { 3 }



//-> 3)✅Difference of setA - setB:
//-> 🤔For this, concept is that show only those elements of setA which are not in setB
const diffSet = 
new Set([...setA].filter(x => !setB.has(x))); 

console.log(diffSet); //outputs: Set(3) { 1, 2, 4 }




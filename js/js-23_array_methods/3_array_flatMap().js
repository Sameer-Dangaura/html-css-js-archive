//-> JavaScript Array flatMap()                         (for this do visit, "3_map()_concept.js" and "3_arrow_function_concept.js")
//-> :
//-> The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
//-> The flatMap() method in JavaScript was introduced in ES2019 and is a combination of map() and flat() (with a depth of 1). It is used to transform each element of an array using a mapping function and then flatten the resulting array by one level.

//__________________________________________________
//-> How flatMap() Works
//-> :
//-> Maps each element using a function (like map()).
//-> Flattens the mapped result into a new array (like calling flat(1) on the result of map()).
//__________________________________________________

const numberList = [1,2,3,4,5];
const newList = numberList.flatMap(x => [x, x*10]);
console.log(newList);   
/* outputs: 
[
   1, 10,  2, 20,  3,
  30,  4, 40,  5, 50
]
*/

/*------------------------------------------------
Step-by-step Execution:

1. flatMap(x => [x, x * 10]) means
:
For each element x, return an array containing [x, x * 10].

Example: When x = 1, it returns [1, 10].

2. Mapped result before flattening
:
[
  [1, 10],
  [2, 20],
  [3, 30],
  [4, 40],
  [5, 50]
]

3. Flattened result (removing one level of nesting)
:
[1, 10, 2, 20, 3, 30, 4, 40, 5, 50]

------------------------------------------------*/


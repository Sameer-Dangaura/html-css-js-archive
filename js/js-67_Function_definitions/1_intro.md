> JavaScript Function Definitions                       (is already introduced in "js-7_functions")
:
-

# For function parameter concept, do visit "js-25_array_sort/ 3_user_defined_min_max_find.js and, 4_sorting_object_arrays.js"  .

# For a little more about function, do visit "js-23_array_methods/3_arrow_function_concept.js" .

# For about arrow function, do visit "js-56_arrow_function" .



> Self-Invoking Functions
:
Example
_____________________________________________
(function () {
  let x = "Hello!!";  // I will invoke myself
})();
_____________________________________________


Explaining:
-----------
- Function Definition (inside parentheses), as we use to define a callback function inside parantheses:
_________________
(function () {
  // some code
})
_________________
This is an anonymous function expression — a function with no name.

- Immediately Invoked (with ()):
____
();
____
This calls (invokes) the function immediately after it is defined.



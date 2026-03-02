> JavaScript Arrays                                     (also introduced in "1_js_variables/11_array.js" and "js-2_const/6_constantArrays.js")
:
- An array is a special variable, which can hold more than one value:
_________________________________________
const cars = ["Saab", "Volvo", "BMW"];
_________________________________________


__________________________________________________________
# Q. Is array concept in JS same as C, C++ ?
=>
ChatGPT said:
No, the array concept in JavaScript is quite different from C and C++ in several ways:

1. Fixed vs. Dynamic Size
:
C/C++: Arrays have a fixed size once declared (e.g., int arr[10];).

JavaScript: Arrays are dynamic; you can add/remove elements without worrying about size.


2. Type Enforcement
:
C/C++: Arrays store elements of the same type (e.g., int arr[] stores only integers).

JavaScript: Arrays can store elements of mixed types (e.g., let arr = [1, "hello", true];).


3. Memory Allocation
:
C/C++: Arrays are stored in contiguous memory locations for efficiency.

JavaScript: Arrays behave more like resizable lists, not guaranteeing contiguous memory.


4. Built-in Methods
:
C/C++: No built-in array methods; you must manually implement sorting, searching, etc.

JavaScript: Arrays have many built-in methods like .push(), .pop(), .map(), .filter(), .reduce(), etc.


5. Accessing Out-of-Bounds Elements
:
C/C++: Accessing an out-of-bounds index leads to undefined behavior or crashes.

JavaScript: Accessing an out-of-bounds index returns undefined without crashing.


6. Associative Behavior
:
C/C++: Arrays use only numerical indices.

JavaScript: Arrays are technically objects, so they can have non-numeric keys (though not recommended).


__________________________________________________________

# Q. What does that mean: JavaScript: Arrays are technically objects, so they can have non-numeric keys (though not recommended).
=>
ChatGPT said
:
In JavaScript, arrays are actually a special kind of object. This means that while they function like lists with numeric indices, you can also assign arbitrary properties (non-numeric keys) to them. However, this is not recommended because it breaks the intended behavior of arrays.

Example of Non-Numeric Keys in a JavaScript Array:
_________________________________________
javascript code:

let arr = [10, 20, 30];  // Regular array

arr["name"] = "Numbers";  // Adding a non-numeric key

console.log(arr[0]);       // 10 (Numeric index works normally)
console.log(arr["name"]);  // "Numbers" (Accessing non-numeric key)
console.log(arr.length);   // 3 (Length doesn't count non-numeric keys)
_________________________________________

Why is this not recommended?
:
- It doesn't affect length – The .length property only considers numeric indexes.
- It makes the array behave like an object – This can cause unexpected behavior when using array methods like .map(), .filter(), etc.
- Slower performance – JavaScript engines optimize arrays for numerical indices but not for arbitrary key-value pairs.


* Comparison with Objects
:
If you need key-value pairs, it's better to use an object instead of an array:
_______________________________________
javascript code:
let obj = {
    name: "Numbers",
    values: [10, 20, 30]
};
console.log(obj.name);   // "Numbers"
console.log(obj.values); // [10, 20, 30]
_______________________________________

In short, JavaScript arrays allow non-numeric keys because they are objects, but it's best to use objects for key-value storage and arrays for ordered lists.
__________________________________________________________




> Creating an Array                                     (you can also do visit to "1_js_variables/11_array.js" and "js-2_const/6_constantArrays.js")
:
- Using an array literal is the easiest way to create a JavaScript Array.
____________________________________________
Syntax:

const array_name = [item1, item2, ...];     
____________________________________________

It is a common practice to declare arrays with the const keyword.





- You can also create an empty array, and then provide the elements:
_________________________________
JavaScript code:

const cars = [];
cars[0] = "BMW";
cars[1] = "Ferrari";
cars[2] = "Audi";
_________________________________


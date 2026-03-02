//-> Array Destructuring       (do visit "js-11_Object_Display/5_Concept_of_array_destructing.js")

//-> :

//-> We can pick up array variables into our own variables:


const fruitsBox = ["apple", "orange", "banana", "mango", "pineapple", "grapes"];

let [fruit1, fruit2] = fruitsBox;

//-> Displaying primitives one:
console.log(fruit1); //outputs: apple
console.log(fruit2); //outputs: orange





//-> Skipping Array Values:
//-> We can skip array values using two or more commas as per need:

let [fruit,,, fruit4] =fruitsBox; //skipping 2nd and 3rd.

//-> Displaying primitives one:
console.log(fruit, ",", fruit4); //ouputs: apple , mango





//-> Array Position Values:
//-> We can pick up values from specific index locations of an array:
let {[1]:fruit11, [2]:fruit12} = fruitsBox;

//-> Displayig primitives one:
console.log(fruit11 + ", " + fruit12); //ouputs: orange, banana





//-> The Rest Property:
//-> You can end a destructuring syntax with a rest property.

//-> This syntax will store all remaining values into a new array:
const [a,,b, ...rest] = fruitsBox; //here, we skipped 2nd fruit

console.log(a); //outputs: apple
console.log(b); //outputs: banana
console.log(rest); //outputs: [ 'mango', 'pineapple', 'grapes' ]




/*________________________________________________________
In this below ... , is the rest property ? Or, ...rest is the rest property: 
____________________________________________
// Create an Array 
const numbers = [10, 20, 30, 40, 50, 60, 70];

// Destructuring
const [a,b, ...rest] = numbers;

// Display the Values
document.getElementById("demo").innerHTML =
"<p>a is " + a +
"<p>b is " + b +
"<p>the rest is " + rest;
____________________________________________

ChatGPT said:
Great question! In your example:

_______________________________
const [a, b, ...rest] = numbers;
_______________________________
✅ ...rest is the rest property (or more precisely, the rest element in array destructuring).

a gets 10

b gets 20

rest gets [30, 40, 50, 60, 70] as an array

📌 So:
... alone is the spread/rest operator (its meaning depends on context)

...rest is called the rest property (in objects) or rest element (in arrays)

It collects the remaining values into a new array or object

🧠 Tip:

- In array destructuring, it collects the remaining items:
_________________________________
const [x, ...others] = [1, 2, 3];  
// x = 1, others = [2, 3]
_________________________________

- In object destructuring, it collects remaining properties:
____________________________________________________
const {name, ...info} = {name: "Sam", age: 25, city: "KTM"};
// name = "Sam", info = {age: 25, city: "KTM"}
____________________________________________________






You said:
That means it is not necessary to use rest with ... , we can use also ...others 


ChatGPT said:
Exactly! ✅

You can name the variable anything you like after the ... — it's just a variable name.

🔹 Example 1:
________________________________________
const [a, b, ...rest] = [1, 2, 3, 4, 5];
// 'rest' gets [3, 4, 5]
________________________________________

🔹 Example 2 (same logic, different name):
__________________________________________
const [a, b, ...others] = [1, 2, 3, 4, 5];
// 'others' gets [3, 4, 5]
__________________________________________


📌 Summary:
... is the rest operator here.

rest, others, remaining, etc — these are just variable names.

So yes, it's not necessary to use the word rest — any valid variable name works.









You said:
... is the rest operator or spread operator


ChatGPT said:
Great question! The ... syntax in JavaScript is both the rest operator and the spread operator — but its name and behavior depends on the context where it's used.

✅ 1. Rest Operator – When collecting values
Used in function parameters or destructuring to gather the "rest" of the values into an array or object.
_____________________________________
// Array destructuring (rest)
const [a, b, ...rest] = [1, 2, 3, 4];
// rest = [3, 4]

// Function parameter (rest)
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}
______________________________________


✅ 2. Spread Operator – When expanding values
Used to spread elements from arrays or objects into another structure.
______________________________________________
// Array spread
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];  // [1, 2, 3, 4]

// Object spread
const obj1 = { name: "Sam" };
const obj2 = { ...obj1, age: 20 };  // { name: "Sam", age: 20 }
______________________________________________



📌 Rule of Thumb:
If you're collecting values → it’s the rest operator.

If you're expanding values → it’s the spread operator.

_______________________________________________________*/


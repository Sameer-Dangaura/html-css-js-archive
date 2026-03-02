//-> JavaScript Map.groupBy()
//-> :
//-> ES2024 added the Map.groupBy() method to JavaScript.

//-> The Map.groupBy() method groups elements of an object according to string values returned from a callback function.

//-> The Map.groupBy() method does not change the original object.


//-> Create an array:
const fruits = [
    {name: "apples", price: 350},
    {name: "bananas", price: 100},
    {name: "oranges", price: 200},
    {name: "Dragon fruit", price: 600}
];

//-> Callback function to Group elements:
//-> Note that callback function takes 3 arguments:

//-> The item value
//-> The item index
//-> The array itself
function myCallBack(fruit) { //here, fruit is an item value of fruits(which is an array). And this callback function is taking the argument of fruits from where it gets called.                                            ➡️ The fruit parameter represents each object inside the fruits array, one by one.
    let fruitPrice = fruit.price;
    return (fruitPrice > 200) ? "Expensive" : "Okay"; //is an ternary operator:
/*____________________________________________    
Syntax:

condition ? trueExpression : falseExpression
_____________________________________________*/
}

//-> Group by price:
const result = Map.groupBy(fruits, myCallBack);  //here, result is a Map object , since Map.groupBy() method creates a new Map object by grouping elements of an object according to string values returned from a callback function.


console.log(result);
/* outputs:
Map(2) {
  'Expensive' => [
    { name: 'apples', price: 350 },
    { name: 'Dragon fruit', price: 600 }
  ],
  'Okay' => [ { name: 'bananas', price: 100 }, { name: 'oranges', price: 200 } ]
}
*/


//-> Display results of expensive:
for(let x of result.get("Expensive")){ // here, result.get("Expensive") returns value of an array [ { name: 'apples', price: 350 }, { name: 'Dragon fruit', price: 600 } ]  to  x subsquently , since for..of loop does an array iteration. And x gets value of an array which are objects so x is acting like an object.  
    console.log(x.name, "is expensive.");
}
/*outputs:
apples is expensive.
Dragon fruit is expensive.
*/


//-> Display results of Okay:
for(let x of result.get("Okay")){
    console.log(x.name, "is okay to buy.");
}
/*outputs:
bananas is okay to buy.
oranges is okay to buy.
*/



//______________________________________
//-> Actually instead of above callback function, we can use This Below Callback function also:
function myCallBack2({ price }) {
    return (price > 200) ? "Expensive" : "Okay";
}
//-> What is different in This Callback function?
//-> :
//-> The difference is just parameter, which is using object destructuring (if you don't know about object destructing, do visit 'destructing' chapter). Here's what it means:
/*
🔍 What is { price }?
:
This is a shorthand to extract the price property from an object passed into the function.
✅Note:
 The name inside the curly braces must match an actual property name of the objects being passed in.

Tip:
 🧠 Final Thought:
This syntax is used a lot in modern JavaScript for functions, especially in callbacks like .map(), .filter(), and even in destructuring parameters in React.
*/



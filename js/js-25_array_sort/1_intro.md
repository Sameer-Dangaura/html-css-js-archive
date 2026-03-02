# For this, do visit : w3schools.


- In JS, built-in sort() method used to sort elements of an array in place. Sorts elements as strings in lexocographical order, not alphabeticl order.
-> lexicographic => (alphabet + numbers + symbols) as strings.



- In this chapter, you gonna introduced with Math.floor() and Math.random() . So, for that you can visit "2_Math.floor()_n_Math.ceil().js" and "2_Math.random().js" .




> Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).
:

# Q.🔹 How Does It Work?
Ans:

1️⃣ Math.min() Function
:
- Math.min() returns the smallest value from a list of numbers.

- It does not accept an array directly, only does individual numbers.
javascript code:
____________________________________________
console.log(Math.min(1, 2, 3)); // Output: 1
____________________________________________



2️⃣ .apply() Method
:
- .apply() is a method of JavaScript functions that allows us to call a function with:

i) A specific   this     value (here,   null     since Math.min() doesn’t rely on   this   ) .

ii)An array whose elements are treated as individual arguments.

javascript code:
_________________________________________________________
console.log(Math.min.apply(null, [1, 2, 3])); // Output: 1
_________________________________________________________

Here, .apply() spreads [1, 2, 3] into Math.min(), making it equivalent to Math.min(1, 2, 3).




🔹 Modern Alternative: Using the Spread Operator (...)
:
- Instead of .apply(), the spread operator (...) can be used in modern JavaScript:

javascript code:
_________________________________________________
console.log(Math.min(...[1, 2, 3])); // Output: 1
_________________________________________________

... (spread) takes the elements from [1, 2, 3] and spreads them as arguments into Math.min().





Q. Why 'null' is used inside .apply()?
Ans:

- The .apply() method allows you to set the     this     value for the function being called. The syntax is:
_____________________________________
# syntax: 
function.apply(thisArg, [argsArray])
_____________________________________

* thisArg: The value to use as      this     inside the function.

* argsArray: An array of values to pass as arguments.


🔹 Why null in Math.min.apply(null, [1, 2, 3])?
javascript code:
________________________________
Math.min.apply(null, [1, 2, 3]);
________________________________

- Since,    this     is a part of the syntax of function.apply() method. So, we have to use it and pass as parameter and we used    null   in-place of      this    and passed as parameter.
Here, null is used because Math.min() is a static method of Math, and it does not use   this     internally.
# Tip:   this     is used by dynamic methods(methods which are inside objects are dynamic method). So, don't worry in static function.

- Since Math.min() does not depend on   this    , we can safely pass    null     as the first argument. OR, you can even pass   (undefined, Math, etc.)
- JavaScript ignores the    this     value when calling Math.min().



🔹 When Is      null     matters in .apply()?
:
- If a method relies on   this    , passing   null     might break it.

Example: Using .apply() on a method that depends on this:
javascript code:
____________________________________________
const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet.apply(null); // Outputs: "Hello, undefined" (since `this` is null)
_____________________________________________


Here,   this     is  null   , so this.name becomes undefined.





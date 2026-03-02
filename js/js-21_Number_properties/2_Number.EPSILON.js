//-> Number.EPSILON in JavaScript
//-> :
//->    Number.EPSILON   is a constant in JavaScript that represents the smallest difference between two floating-point numbers that JavaScript can reliably distinguish.

/*________________________________________________________
🔹 Syntax : 
  ----------

Number.EPSILON; // 2.220446049250313e-16

✅ Value: 2.220446049250313e-16 (≈ 0.000000000000000222)
✅ Used to handle floating-point precision errors
________________________________________________________*/


//-> 🔹 Why Do We Need  Number.EPSILON ?
//-> 
//->JavaScript stores numbers as 64-bit floating-point (IEEE 754 format), which can cause precision errors when dealing with decimals.

//-> Example of Floating-Point Precision Issue:

console.log(0.1 + 0.2); // 0.30000000000000004 ❌ (Not exactly 0.3)
console.log(0.1 + 0.2 === 0.3); // false ❌ (Unexpected result)
//-> 📌 Problem: Due to how floating-point arithmetic works, the result is not exactly 0.3.                 (Also discussed in "js-18_numbers/3_floating_precision.js") .




//-> 🔹 Fixing Precision Issues with    Number.EPSILON
//-> :
//-> We can use Number.EPSILON to check for small floating-point differences instead of strict equality (===):


function isEqual(a, b) {
    return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3)); // true ✅ (Now correctly compares)

//-> 📌 Why does this work?
//-> :
//-> Math.abs(a - b) gets the difference in +ve form.
//-> If the difference is smaller than                   Number.EPSILON , we consider them equal. 👍


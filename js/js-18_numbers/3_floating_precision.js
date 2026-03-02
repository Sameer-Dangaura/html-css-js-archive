//-> Floating Precision
//-> :
//-> Floating point arithmetic is not always 100% accurate:

let num1 = 0.2 + 0.1;
console.log(num1);  //outputs: 0.30000000000000004



//-> To solve the problem above, it helps to multiply and divide:

let num2 = (0.2*10 + 0.1*10) / 10;
console.log(num2);  //outputs: 0.3



//________________________________________________________
//-> Q. What does that mean, do you have also question ?
//-> Ans: If yes then, let's understand:

// Explanation: Floating Point Arithmetic is Not Always 100% Accurate

// 1️⃣ Why does 0.2 + 0.1 give 0.30000000000000004 instead of 0.3?
// In JavaScript (and most programming languages), numbers are stored as 64-bit floating-point values (IEEE 754 standard). Floating-point numbers cannot always represent decimal fractions exactly due to how they are stored in binary.

// For example:

// 0.1 in binary is 0.0001100110011001100110011... (repeating infinitely)
// 0.2 in binary is 0.001100110011001100110011... (repeating infinitely)
// When adding them, the binary sum isn't exactly 0.3, but something slightly more (0.30000000000000004).

// javascript code:
// let num1 = 0.2 + 0.1;
// console.log(num1); // Outputs: 0.30000000000000004




// 2️⃣ How to Fix It? 
// Ans: Using Multiplication and Division Trick
// Since floating-point numbers cause precision errors, a common workaround is to use integer arithmetic (multiplication and division).

// Multiply both numbers by 10 (or 100, 1000, etc., depending on precision needed)
// Perform the addition in whole numbers
// Divide back to get the correct decimal value

// javascript code:
// let num2 = (0.2 * 10 + 0.1 * 10) / 10;
// console.log(num2); // Outputs: 0.3

// 🔹 Why does this work?
//-----------------------
// :
// 0.2 * 10 = 2
// 0.1 * 10 = 1
// 2 + 1 = 3
// 3 / 10 = 0.3 (no floating-point error here)

// ✅ This ensures an accurate result without floating-point precision issues!
//________________________________________________________

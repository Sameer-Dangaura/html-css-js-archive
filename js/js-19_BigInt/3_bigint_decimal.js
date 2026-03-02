//-> BigInt Decimals
//-> :
//-> A BigInt can not have decimals.

let num1 = 5n;
// let num2 = num1 / 2;    //TypeError: Cannot mix BigInt and other types, use explicit conversions


//______________________________________________
//-> Notes
//-> :
//-> Arithmetic between a BigInt and a Number is not allowed (type conversion lose information).
//______________________________________________


let num3 = Number(num1) / 2;    //Explicit conversion of num1 variable to number using in-built   Number()    method, which was in BigInt type.
console.log(num3);  //outputs: 2.5

//-> JavaScript BigInt
//-> :
//->  All JavaScript numbers are stored in a 64-bit floating-point format.

//-> JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

let myNum = BigInt("123456789012345678901234567890");
console.log(myNum); //outputs: 123456789012345678901234567890n

//-> Here,   BigInt()    is a constructor. Constructor called by passing arguments.
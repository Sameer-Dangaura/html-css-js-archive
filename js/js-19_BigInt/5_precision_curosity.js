//-> Precision Curiosity
//-> :
//-> Rounding can compromise program security:
//-> At 1st do visit: "js-19_BigInt/1_intro.js" to understand how and which values gets rounded up.     And there is displayed 9007199254740992 and  9007199254740993 in console.log() which displays the same value as

//-> : 9007199254740992 
//-> Because of that, curiosity occurs for precision: are they 9007199254740992 and 9007199254740993 equal:

let result = 9007199254740992 == 9007199254740993;
console.log(result);    //outputs: true ,(which is wrong!)



//-> let's do this again. But, by using BigInt:
let result1 = 9007199254740992n == 9007199254740993n;
console.log(result1);   //outputs: false ,(correct)
//-> BigInt doesn't lose precision.

//-> Everything With a "Value" is True
//-> :

//-> 100 value is true:
console.log( Boolean(100) );    //outputs: true

//-> 3.14 is true:
console.log( Boolean(3.14) );   //outputs: true

//-> -15 is true:
console.log( Boolean(-15) );   //outputs: true

//-> Any (not empty) string is true:
console.log( Boolean("Hello") );    //outputs: true

//-> Even the string 'false' is true:
console.log( Boolean("false") );    //outputs: true

//-> Any expression (except zero) is true:
console.log( Boolean(1 + 7 + 3.14) );   //outputs: true
console.log("\n");





//-> Everything Without a "Value" is False
//-> :

//-> The Boolean value of 0 (zero) is false:
console.log( Boolean(0) );   //outputs: false

//-> The Boolean value of -0 (minus zero) is false:
console.log( Boolean(-0) );   //outputs: false

//-> The Boolean value of "" (empty string) is false:
console.log( Boolean("") );   //outputs: false

//-> The Boolean value of undefined is false:
console.log( Boolean(undefined) );   //outputs: false

//-> The Boolean value of null is false:
console.log( Boolean(null) );  //outputs: false

//-> The Boolean value of false is (you guessed it) false:
console.log( Boolean(false) );  //outputs: false

//-> The Boolean value of NaN is false:
console.log( Boolean(NaN) );    //outputs: false


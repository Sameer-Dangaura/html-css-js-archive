//-> Associative Arrays
//-> :
//-> Many programming languages support arrays with named indexes.

//-> Arrays with named indexes are called associative arrays (or hashes).

//-> JavaScript does not support arrays with named indexes.

//-> In JavaScript, arrays always use numbered indexes.  

const person = [];
person[0] = "John";
person[1] = "Doe";
console.log(person[0]); //outputs: John
console.log(person.length); //outputs: 2




//_____________________________________________________
//-> WARNING !!
//-> If you use named indexes, JavaScript will redefine the array to an object.

//-> After that, some array methods and properties will produce incorrect results.

const Human = [];
Human["firstName"] = "John";
Human["lastName"] = "Doe";
console.log(Human["firstName"]);  //outputs: John
console.log(Human.length);  //outputs: 0 , (incorrect result)


let firstName = "John";
let lastName = "Doe";

//-> Destructing:
[firstName, lastName] = [lastName, firstName];

console.log(firstName); //outputs: Doe
console.log(lastName); //outputs: John


//-> Dynamic typing:

//-> You might have heared that JavaScript is called "a dynamic typed language".
//-> this means that the variable data type is not fixed.

//-> A variable can store any type of data, and the user can achieve this without specifying the type of data he/she wants to store (e.g: numbers, string, objects, arrays, etc.)
//-> also, one can change the stored value to any type of data, anytime freely.

//Example:

let myData = "Hello , mate";
console.log(myData);       //outputs: Hello, mate
console.log(typeof(myData)); //outputs: string

// Updating/reassigning myData
myData = 2;
console.log(myData);    //outputs: 2
console.log(typeof(myData)); //outputs: number
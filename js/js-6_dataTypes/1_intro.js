//-> JavaScript has 8 Datatypes
//-> :
// * String
// * Number
// * Bigint
// * Boolean
// * Undefined
// * Null
// * Symbol
// * Object


//-> > The Object Datatype
//-> :
//-> - The object data type can contain both built-in objects, and user defined objects:

//-> Built-in object types can be:
//->                                objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.



//-> Examples:
//------------

//-> Numbers:
let length = 16;
let weight = 7.5;
console.log(length);    //outputs: 16
console.log(weight);    //outputs: 7.5
console.log(typeof length);    //outputs: number

//-> Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log(color); //outputs: "Yellow"
console.log(lastName);  //outputs: "Johnson"
console.log(typeof color);  //outputs: string

//-> Booleans
let x = true;
let y = false;
console.log(x); //outputs: true
console.log(y); //outputs: false
console.log(typeof x);  //outputs: boolean


//-> Object:
const person = {firstName:"John", lastName:"Doe"};
console.log(person);    //outputs: { firstName: 'John', lastName: 'Doe' }
console.log(typeof person); //outputs: object


//-> Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);  //outputs: [ 'Saab', 'Volvo', 'BMW' ]
console.log(typeof cars);   //outputs: object


//-> Date object:
const date = new Date();
console.log(date);  //outputs: 2025-02-13T15:40:28.027Z
console.log(typeof date);   //outputs: object


// Note:
// A JavaScript variable can hold any type of data.
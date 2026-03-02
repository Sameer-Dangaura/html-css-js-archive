//-> Object Properties
//-> :
//->  The named values, in JavaScript objects, are called properties.

//-> e.g: 
//  property    value 
//  --------    -----
//  firstName:	John
//  lastName:	Doe
//  age:        50


//--------------------------------------------------

//-> Accessing Object Properties
//-> :
//->  You can access object properties in two ways:
//->i) objectName.propertyName
//->ii) objectName["propertyName"]


//Create an empty Object:
const person = {};

//Add properties:
person.firstName = "Giri";  //we can access properties of an object like this line.

person["lastName"] = "Lal"; //we can access properties of an object like this line also.

person.age = 33;
person["eyeColor"] = "red";

console.log(person);    //outputs: { firstName: 'Giri', lastName: 'Lal', age: 33, eyeColor: 'red' }

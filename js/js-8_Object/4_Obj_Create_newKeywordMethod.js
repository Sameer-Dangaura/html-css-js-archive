//-> JavaScript Object Definition
//-> :
//-> ii) Using the new Keyword:


//-> Example: This example create a new JavaScript object using      new Object()   ,   and then adds 4 properties: 


//Creating object using new keyword:

const person = new Object();    // here,    Object()     is a built-in constructor function in JavaScript that creates a new object. When you call     Object()     with the    new    keyword, it creates a new, empty object.

//Add properties:
person.firstName = "Hari";
person.lastName = "Lal";
person.age = 33;
person["eyeColor"] = "black";   //we can also access property of an object like : person["protertyName"]

console.log(person);    //outputs: { firstName: 'Hari', lastName: 'Lal', age: 33, eyeColor: 'black' }

console.log(person.firstName, person["lastName"], "has",person.eyeColor, "eye color." );  //outputs: Hari Lal has black eye color.

//______________________________________________________
//-> Note:
//-> For readability, simplicity and execution speed, use the object literal method. 
//______________________________________________________

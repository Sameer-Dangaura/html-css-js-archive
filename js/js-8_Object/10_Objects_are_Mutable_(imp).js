//-> JavaScript Objects are Mutable
//-> :
/*_______________________________________________________
| (Important point)                                      |
| :                                                      |
|-> JS Objects are addressed by reference, not by value. |
|so, JS Objects are mutable.                             |
|________________________________________________________|
*/


//-> If person is an object, the following statement will not create a copy of person:
//---------------------
//-> const x = person;|
//---------------------

//-> The object x is not a copy of person. The object x is person.

//-> The object x and the object person share the same memory address.

//-> Any changes to x will also change person:

//_______________________________________________________


//-> Here, we gonna implement above discuss and gonna use one object is person and another object is anotherPerson instead of x object:

//Create an Object: 
const person = {};

//Add properties:
person.firstName = "Raka";
person.lastName = "Shaha";
person.age = 30;

console.log(person);    //outputs: { firstName: 'Raka', lastName: 'Shaha', age: 30 }    


// Create a copy(Since, JS object are addressed by reference So, it copies by taking reference):
const anotherPerson = person;   //here anotherPerson 'Object' take reference of a person 'Object'.

anotherPerson.age = 10; //changing the age properties of anotherPerson object will also change the age property of person object. 

console.log(person);    //outputs: { firstName: 'Raka', lastName: 'Shaha', age: 10 }


//________________________________________________________
//-> Q. Why JS objects are mutable?
//-> :
//-> JS Objects are mutable because they are stored in memory as references, meaning multiple variables can point to the same memory location and modify the same underlying object.
//________________________________________________________

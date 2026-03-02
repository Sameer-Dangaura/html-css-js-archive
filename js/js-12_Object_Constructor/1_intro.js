//--------------------------------------------------------
//-> JavaScript Object Constructor Functions
//-> :

//-> Sometimes we need to create many objects of the same type,
//->as in c++ we create many objects from a single class.

//-> To create an    object type    we use an object constructor function.

//-> It is considered good practice to name constructor functions with an upper-case first letter.

//--------------------------------------------------------



//-> Example: Object Type Person

//-> Constructor function for Person object:
function Person( first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

//-> Create a Person object using constructor function:
const myFather = new Person("John", "Doe", 40, "black");

console.log(myFather,"\n");
/*outputs:
 Person {
  firstName: 'John',
  lastName: 'Doe',
  age: 40,
  eyeColor: 'black'
}
*/

console.log("My father name is", myFather.firstName, myFather.lastName, "and he is", myFather.age, "years old.", "\n");   
//outputs: My father name is John Doe and he is 40 years old.


//--------------------------------------------------------


//-> Since lately we created a js Object using      new      keyword with      Object()    which is built in Object constructor function.
//-> i.e. new Object();

//-> But we here, created a user-defined constructor function named: Person()
//-> so, Here we created object using :   new Person();
//-> Which creates Person object.


//______________________________________________________
//-> Note:
//-> In the constructor function,     this      has no value.

//-> The value of    this      will become the new object when a new object is created.
//______________________________________________________



//-> Now we can use    new Person()     to create many new Person objects:

const myMother = new Person("Jane", "Doe", 38, "brown");
console.log(myMother,"\n");

const mySister = new Person("Febe", "Doe", 28, "black");
console.log(mySister,"\n");

const myBrother = new Person("Febo", "Doe", 20, "black");
console.log(myBrother,"\n");

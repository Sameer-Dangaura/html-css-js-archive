//-> Adding a Method to a Constructor
//-> :
//-> You cannot add a new method to an object constructor function.

//-> This below code will produce a TypeError:

//-> Constructor function for Human object:
function Human( first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

//-> Create Human object:
const Friend1 = new Human("Pawan", "Doe", 20, "brown");
const Friend2 = new Human("Rakesh", "Doe", 22, "brown");

//-> trying to add method to constructor:
Human.fullName = function(){
    return this.firstName + " " + this.lastName;
}

//-> Displaying:

console.log(Friend1);
/* outputs:
Human {
  firstName: 'Pawan',
  lastName: 'Doe',
  age: 20,
  eyeColor: 'brown'
}
*/

// console.log("Friend1 Full name:", Friend1.fullName() );   //outputs: TypeError: Friend1.fullName is not a function

console.log("\n", Friend2);
/* outputs:
Human {
  firstName: 'Rakesh',
  lastName: 'Doe',
  age: 22,
  eyeColor: 'brown'
}
*/

// console.log("Friend2 Full name:", Friend2.fullName() );   //outputs: TypeError: Friend2.fullName is not a function




//--------------------------------------------------------

//-> Another method to add a new method to an object constructor:

//-> Adding a new method must be done to the constructor function prototype:
//____________________________________________________
//-> Tip: If you don't know about constructor function prototype, make sure you do visit: "4_add_property_to_Constructor.js".
//____________________________________________________


//-> Constructor function for Person object:
function Person( first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

//-> create Person object
const myFriend1 = new Person("Pawan", "Doe", 20, "brown");
const myFriend2 = new Person("Rakesh", "Doe", 22, "brown");

//-> adding a new method to an object constructor:
Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

//-> Displaying:

console.log(myFriend1);
console.log("myFriend1 Full name:", myFriend1.fullName() );   //outputs: myFriend1 Full name: Pawan Doe

console.log("\n", myFriend2);
console.log("myFriend2 Full name:", myFriend2.fullName() );   //outputs: myFriend2 Full name: Rakesh Doe

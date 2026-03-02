//-> Adding a Method to an Object
//-> :
//-> Adding a method to a created object is easy:

//--------------------------------------------------------
//-> Note:
//-> The new method will be added to myFriend1 . Not to any other Person Objects.
//--------------------------------------------------------


//-> Constructor function for Person object:
function Person( first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

//-> Create Person object:
const myFriend1 = new Person("Pawan", "Doe", 20, "brown");
const myFriend2 = new Person("Rakesh", "Doe", 22, "brown");

//-> Adding a method to an myFriend1 object:
myFriend1.fullName = function(){
    return this.firstName + " " + this.lastName;
}

//-> Displaying:
console.log(myFriend1);
/* outputs:
Person {
  firstName: 'Pawan',
  lastName: 'Doe',
  age: 20,
  eyeColor: 'brown',
  fullName: [Function (anonymous)]
}
*/

console.log("myFriend1 Full name:", myFriend1.fullName() ); //outputs: myFriend1 Full name: Pawan Doe

console.log("\n", myFriend2);
/* outputs:
Person {
  firstName: 'Rakesh',
  lastName: 'Doe',
  age: 22,
  eyeColor: 'brown'
}
*/

// console.log("myFriend2 Full name:", myFriend2.fullName());    
//outputs: TypeError: myFriend2.fullName is not a function

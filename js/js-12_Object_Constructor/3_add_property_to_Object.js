//-> Adding a Property to an Object
//-> :
//-> Adding a property to a created object is easy:


//--------------------------------------------------------
// Note:
// The new property will be added to myFriend1. Not to any other    Person Objects .
//--------------------------------------------------------


//Constructor function for Person object:
function Person( first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFriend1 = new Person("Pawan", "Doe", 20, "brown");

const myFriend2 = new Person("Rikesh", "Doe", 22, "brown");


//adding a property to myFriend1:
myFriend1.Nationality = "Nepali";

console.log(myFriend1,"\n");
/* outputs:
Person {
  firstName: 'Pawan',
  lastName: 'Doe',
  age: 20,
  eyeColor: 'brown',
  Nationality: 'Nepali'
}
*/

console.log(myFriend2,"\n");
/* outputs:
Person {
  firstName: 'Rikesh',
  lastName: 'Doe',
  age: 22,
  eyeColor: 'brown'
}
*/

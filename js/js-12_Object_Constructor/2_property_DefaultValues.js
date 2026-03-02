//-> Property Default Values
//-> :
//-> A value given to a property will be a default value for all objects created by the constructor:

//-> Constructor function for Human object:
function Human( first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.Nationality = "Nepali";   //giving default value.
}

const myFriend1 = new Human("Dip", "Badu", 20, "brown");
console.log(myFriend1,"\n");
/* outputs:
Human {
  firstName: 'Dip',
  lastName: 'Badu',
  age: 20,
  eyeColor: 'brown',
  Nationality: 'Nepali'
} 
*/

const myFriend2 = new Human("San", "Dewal", 20, "balck", "Indian");
console.log(myFriend2,"\n");
/* outputs:
Human {
  firstName: 'San',
  lastName: 'Dewal',
  age: 20,
  eyeColor: 'balck',
  Nationality: 'Nepali'
} 
*/




//-> In above method we were not able to change the default value of a constructor function.



//--------------------------------------------------------

//-> In below method we will be able to change the default value of constructor function:

//Constructor function for Person object:
function Person( first, last, age, eye, nationality = "Nepali") {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.Nationality = nationality;   //giving default value.
}

const myFriend3 = new Person("Dip", "Badu", 20, "brown");
console.log(myFriend3,"\n");
/* outputs:
Person {
  firstName: 'Dip',
  lastName: 'Badu',
  age: 20,
  eyeColor: 'brown',
  Nationality: 'Nepali'
}
*/


const myFriend4 = new Person("San", "Dewal", 20, "balck", "Indian");
console.log(myFriend4,"\n");

/* outputs:
Person {
  firstName: 'San',
  lastName: 'Dewal',
  age: 20,
  eyeColor: 'balck',
  Nationality: 'Indian'
}
*/

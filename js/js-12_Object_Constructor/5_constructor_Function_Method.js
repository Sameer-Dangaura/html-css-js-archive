//-> Constructor Function Methods
//-> :
//-> A constructor function can also have methods:

//-> Constructor function for Person object:
function Person( first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

//-> create a Person object:
const myFriend1 = new Person("Resham","Doe",20,"black");

console.log(myFriend1);
/*outputs:
Person {
  firstName: 'Resham',
  lastName: 'Doe',
  age: 20,
  eyeColor: 'black',
  fullName: [Function (anonymous)]
}
*/

console.log("Full name:", myFriend1.fullName() );   //outputs: Full name: Resham Doe

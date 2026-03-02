//-> Adding a Method to an Object
//-> :
//->  Adding a new method to an object is easy as adding a new property to an object:


//Create an Object:
const person = {
    firstName: "Rock",
    lastName: "Joshi",
    age: 30
};

console.log(person);    //outputs: { firstName: 'Rock', lastName: 'Joshi', age: 30 }


//-> Add a Method
person.fullName = function(){
    return this.firstName + " " + this.lastName;
};
    
console.log(person);    /*outputs: {
                                firstName: 'Rock',
                                lastName: 'Joshi',
                                age: 30,
                                fullName: [Function (anonymous)]
                                } 
                        */


console.log("Person name:", person.fullName()); 
//outputs: Person name: Rock Joshi

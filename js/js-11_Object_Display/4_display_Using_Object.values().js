//-> Display object properties Using Object.values()
//-> :

//-> Object.values() creates an array from the property values:

//-> The Object.values() method does not change the original object.


//-> Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

//-> create an array:
const myArray = Object.values(person);  
//Object.values(person) returns an array of values only from an person object  to myArray.

console.log(myArray);   //outputs: [ 'John', 30, 'New York' ]

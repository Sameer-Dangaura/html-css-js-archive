//-> Deleting Properties
//-> :
//->  The   delete   keyword deletes a property from an object:

const person = {
    firstName: "Raja",
    lastName: "Babu",
    age: 30
};

console.log(person);    //outputs: { firstName: 'Raja', lastName: 'Babu', age: 30 }


//-> now deleting the lastName property:
delete person.lastName;
console.log(person);    //outputs: { firstName: 'Raja', age: 30 }




delete person["age"];
console.log(person);    //outputs: { firstName: 'Raja' }

console.log(person.firstName, "is", person.age, "years old.");  //outputs: Raja is undefined years old.

//________________________________________________________
//-> Note:
//-> The delete keyword deletes both the value of the property and the property itself.

//-> After deletion, the property cannot be used before it is added back again.
//________________________________________________________

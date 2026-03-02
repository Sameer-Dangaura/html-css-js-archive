//-> Object Destructuring
//-> :

//-> Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    rollNO: 3
};
console.log(person); //outputs: { firstName: 'John', lastName: 'Doe', rollNO: 3 }

//-> Destructing:
//-> While you are destructuring, you should trying to extract existent properties from the   person   object.
let {firstName, lastName} = person;

//-> Display Primitive Values:
console.log(firstName); //outputs: John
console.log(lastName); //outputs: Doe




//-> Object Property Alias:
//-> If you want to extract firstName and lastName into variables fName and lName, you need to use aliasing:
let {firstName: fName, lastName: lName} = person;

console.log(fName); //outputs: John
console.log(lName); //outputs: Doe





//-> The order of the properties does not matter:
let {lastName:Lname, firstName:Fname} = person;

console.log(Fname); //outputs: John
console.log(Lname); //outputs: Doe




/*________________________________________________
Note:
Destructuring is not destructive.

Destructuring does not change the original object.
__________________________________________________*/




//-> Object Default Values:
//-> For potentially missing properties we can set default values:
let {firstName:fname, lastName:lname, club="IT"} = person;

console.log("FirstName: ", fname, "\nLastName: ", lname, "\nClub: ", club); 
/*outputs: 
FirstName: John
LastName: Doe
Club: IT
*/


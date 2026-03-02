//-> JavaScript Object Definition
//-> :
//-> i) Using an Object Literal:
//_______________________________________________________
//-> JavaScript Object Literal
//-> :
//->e.g: An object literal is a list of    name:value   pairs inside curly braces {}.

//->e.g: {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}


//---------
//-> Note:|
//---------
//->  name:value   pairs are also called key:value pairs.

//-> object literals are also called object initializers.
//_______________________________________________________



//-> Example-1: This example create a JavaScript object(here, person is object) with 4 properties:

// Create an Object:
const person = {firstName: "John", lastName: "Son", age:30, eyeColor: "blue"};

console.log(person);    //outputs: { firstName: 'John', lastName: 'Son', age: 30, eyeColor: 'blue' }

console.log(person.firstName,"is", person.age, "years old.");   //outputs: John is 30 years old.


//--------------------------------------------------------



//-> Spaces and line breaks are not important. An object initializer can span multiple lines (This makes more readable format):

//-> Example-2: This example create a JavaScript object(here, people is object) with 4 properties:

// Create an Object:
const people = {
    firstName: "Jack",
    lastName: "Hong",
    age: 33,
    eyeColor: "green"
};
console.log(people);    //outputs: { firstName: 'Jack', lastName: 'Hong', age: 33, eyeColor: 'green' }

console.log(people.firstName, "is", people.age, "years old.");  //outputs: Jack is 33 years old.

//--------------------------------------------------------



//-> Example-3: This example creates an empty JavaScript object(here, human is object), and then adds 4 properties:

// Create an empty Object:
const human = {};

// Add Properties
human.firstName = "Shyam";
human.lastName = "Lal";
human.age = 39;
human.eyeColor = "gray";

console.log(human);    //outputs: { firstName: 'Shyam', lastName: 'Lal', age: 39, eyeColor: 'gray' }

console.log(human.firstName, "has", human.eyeColor, "eye color.");  //outputs: Shyam has gray eye color.

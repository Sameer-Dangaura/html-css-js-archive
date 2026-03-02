//-> Arrays are Objects
//-> :
//-> Arrays are a special type of objects. 
//-> The      typeof       operator in JavaScript returns "object" for arrays.

//-> But, JavaScript arrays are best described as arrays.

//______________________________________________

//-> Arrays use numbers to access its "elements". In this example, person[0] returns John:

const person = ["John", "Doe", 46];
console.log(person[0]); //outputs: John
console.log(typeof person); //outputs: object

//______________________________________________

//-> Objects use names to access its "members". In this example, Person.firstName returns John:

const Person = {
    firstName: "John",
    lastName: "Doe",
    age: 46
};
console.log(Person.firstName);  //outputs: John
console.log(typeof Person);    //outptus: object
console.log("\n");
//_____________________________________________




//-> Array Elements Can Be Objects
//-> :
//->  JavaScript variables can be objects. Arrays are special kinds of objects.

//-> Because of this, you can have variables of different types in the same Array.                              (you can also visit in "13_nested_arrays_n_objects.js")

//-> You can have objects in an Array. 
//-> You can have functions in an Array. 
//-> You can have arrays in an Array:

//-> let's at 1st create some variables of different types and then we will add in one array:
const myFriendObj = {name: "John Doe", age: 22};

function myFunction(){
    return "Hi, I'm function";
}

const myarraylist = ["BMW", "Ferrari", "Audi"];


//-> Now, create an array having variables of different types in the same Array:
const myArray = [myFriendObj, myFunction(), myarraylist];

//-> let's display elements of myArray:
console.log(myArray[0]);   //outputs: { name: 'John Doe', age: 22 }
console.log(myArray[0].name);   //outputs: John Doe
 
console.log(myArray[1]);    //outputs: Hi, I'm function

console.log(myArray[2]);    //outputs: [ 'BMW', 'Ferrari', 'Audi' ]
console.log(myArray[2][0]);    //outputs: BMW
console.log(myArray[2][1]);    //outputs: Ferrari

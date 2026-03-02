//-> Accesing js properties using some methods
//-> :


//-> Method-1: using   objectName.propertyName   method

const person = {
    firstName: "Jack",
    lastName: "Bhatta",
    age: 30,
    eyeColor: "blue"
};

console.log(person.firstName);  //outputs: Jack

//--------------------------------------------------------

//-> Method-2: using   objectName["propertyName"]   method

const people = {
    firstName: "Rocky",
    lastName: "Don",
    age: 22,
    eyeColor: "red"
};

console.log(people["firstName"]);   //outputs: Rocky

//--------------------------------------------------------


//-> Method-3: using    objectName[expression]   method
                //  where, expression can be a variable who contain property of an object inside quotation.

const human = {
    firstName: "John",
    lastName: "Don",
    age: 22,
    eyeColor: "red"
};        

let myName = "firstName";
console.log(human[myName]);    //outputs: John


//-> This below myName2 is not expression. So, it is not gonna work:
// let myName2 = firstname;
// console.log(human[myName2]);    //outputs: ReferenceError: firstname is not defined

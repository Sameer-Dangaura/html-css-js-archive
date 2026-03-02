//-> redeclare and reassign var:
var schoolName = 'CP';
console.log(schoolName);

var schoolName = "LBA";     //can redeclare var variable in same block scope
console.log(schoolName);

schoolName = 'Rose';        //can reassign var variable in same block scope
console.log(schoolName);



//-> redeclare and reassign let:
let address = 'mnr';
console.log(address);

//let address = 'daijee';   //cannot redeclare let variable in same block scope

address = 'daijee';     //can reassign let variable in same block scope
console.log(address);



//-> redeclare and reassign const:
const myName = 'Ramu Kaka';
console.log(myName);

// const myName = 'Shyam lal';     //cannot redeclare const in same block scope

// myName = 'Shyam lal';       //cannot reassing const in same block scope
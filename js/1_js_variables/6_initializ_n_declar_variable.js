//-> A) Initializing and declaring a variable in different line:

//-> to declare a variable, you use the  'let',  'var'  (except  'const' , since you cannot just declare using  'const' . It is mendatory to initialize as well simultaneously.)  keyword followed by the name you wish to give your variable:

var schoolName;
let address;

console.log(schoolName);    //outputs: undefined
console.log(address);   //outputs: undefined 
//-> In above outputs  'undefined' , hmm... what is that?
//-> for that, do visit '21_undefined.js'.


//-> after you have declared a variable you can initialize that variable with a value:

schoolName = 'LBA';
address = 'MNR';

//-> now try to display their value in console:
console.log(schoolName);    //outputs: LBA
console.log(address);   //outputs: MNR



//-------------------------------------------------------------
//-> B) Initializing and declaring a variable in a single line:

//-> For  'const'  keyword, it is mendatory to declare and initialize a variable in a single line.

//Example:

const myage = 20;   //declaring and initializing at the same time
console.log(myage); //outputs: 20


var myName = 'Amir';    //declaring and initializing at the same time
let myAddress = 'KTM';  //declaring and initializing at the same time

console.log(myName);    //outputs: Amir
console.log(myAddress); //outputs: KTM
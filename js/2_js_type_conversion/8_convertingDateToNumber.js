//-> This given below's example is part of a explicit conversion. Since, 
//-> there is used   Number()   and   getTime()    function for conversion to number explicitly.


//-> f) Converting Dates to Numbers
//-> :
//->  The global method   Number()    can be used to convert dates to number.

//-> Example:

let currentDate = new Date();  
//->             |__________|
//->                  |
//-------- Creates a new instance of the 'Date' object, which represent the current date and time. ---------------

//-> you will learn more about it in later chapters like: js-12_Object_Constructor. Until now, for above code just understand that:
//->  'currentDate'  is   'Date' object,
//-> and  new Date()  is working as constructor to creating a Date object.

//-> To understand more about the term  instance of object , do scroll to last tip.
//--------------------------------------------------------

console.log(currentDate);   //displays current date

let numericDate = Number(currentDate);  //Number()  function is used to convert dates to number.
console.log(numericDate);   //outputs: number of milliseconds




//-> The date method    getTime()    does the same as  Number() .
//-> Example:

let numDate = currentDate.getTime();
console.log(numDate);   // Output: Number of milliseconds





//--------------------------------------------------------
//-> If you have concept about objects from C++, then this below is for you:
//-> Tips: For understanding about the term  instance of  constructor function or class.

//-> When you create an object using a constructor function or ES6 class, the new object is considered an instance of that constructor or class. For example:

/*
function Person(name) {
    this.name = name;
}

let alice = new Person('Alice');    

*/

//-> In this code, alice is an instance of Person. It has access to the properties and methods defined in the Person constructor or its prototype.
//--------------------------------------------------------
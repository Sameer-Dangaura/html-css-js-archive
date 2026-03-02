//----------------------------------------------------
// At 1st do visit: js-8_Object/6_Object_Method.js   |
//----------------------------------------------------

//-> JavaScript Object Methods
//-> :
//->  Object methods are actions that can be performed on objects.

//-> A method is a function definition stored as a property value.

// --------------------------
// Property	    Value       |
// --------------------------
// firstName	John
// lastName	    Doe
// age	        50
// eyeColor	    blue
// fullName	    function() {return this.firstName + " " + 
//                          this.lastName;}



//Create an Object:
const person = {
    firstName: "Rock",
    lastName: "Joshi",
    age: 30,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());  //outputs: Rock Joshi


//-> In the example above,   this    refers to the person object:

//-> this.firstName means the firstName property of person.

//-> this.lastName means the lastName property of person.
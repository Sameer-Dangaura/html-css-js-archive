//-> JavaScript Object Methods
//-> :
//-> Methods are actions that can be performed on objects.

//-> Methods are function definitions stored as property values.



const person = {
    firstName: "Joy",
    lastName: "Roy",
    age: 33,
    eyeColor: "blue",

    //-> Here, below is method of object.   where, fullName is method name,                             function() is syntax to define a method.
    fullName: function() {  
        return this.firstName + " " + this.lastName;
    }
};

console.log( person.fullName() );    //outputs: Joy Roy


//-> In the example above,   this   refers to the person object:

//-> this.firstName means the firstName property of person.

//-> this.lastName means the lastName property of person.
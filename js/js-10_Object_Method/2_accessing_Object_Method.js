//-> Accessing Object Methods
//-> :

//-> You access an object method with the following syntax:
//-> objectName.methodName()


//-> If you invoke the fullName property with (), it will execute as a function:

//-> Example:
const person = {
    firstName: "Rock",
    lastName: "Joshi",
    age: 30,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); //outputs: Rock Joshi


//--------------------------------------------------------



//-> If you access the fullName property without (), it will return the function definition(since, we also studied about this behaviour of function in "js-7_functions" section):

//-> Example:
const human = {
    firstName: "Rock",
    lastName: "Joshi",
    age: 30,
    fullName: function(){
            return this.firstName + " " + this.lastName;
    }
};
    
console.log(human.fullName);   
//outputs: function() {  return this.firstName + " " + this.lastName; }

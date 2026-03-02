//-> More on:  Not Allowed in Strict Mode

//-> vii) Writing to a read-only property is not allowed:

"use strict";

//-> Create a person object: 
const personObject = {};

Object.defineProperty(personObject, "Fname", {value:"John", writable:false });

//-> Adding properties to an object:
personObject.Lname = "Doe";
personObject.address = "KTM";

console.log(personObject); 
/* outputs: 
{ Lname: 'Doe', address: 'KTM' }
*/

console.log(personObject.Fname); //outputs: John


//-> Writing to read only property:
personObject.Fname = "Johnny"; //TypeError: Cannot assign to read only property 'Fname' of object '#<Object>'


/*_____________________________________________________
Q.🤔 Tell me about Object.defineProperty() ?


ChatGPT said:
Absolutely! Object.defineProperty() is a method in JavaScript used to add or modify a property on an object with fine-grained control. It allows you to set special characteristics, or descriptors, of the property.

🔧 Syntax:
________________________________________________
Object.defineProperty(obj, propName, descriptor);
________________________________________________

* obj: The object to define the property on.

* propName: The name of the property.

* descriptor: An object that describes the behavior of the property.


💡 Common Descriptors:
                          By
Key	        Type	    Default	        Description
                        -------
value	    any	        undefined	The actual value to store in the property.

writable	boolean	    false	Whether the property value can be changed.

enumerable	boolean	    false	Whether the property shows up in for...in loops and Object.keys.

configurable  boolean	false	Whether the property can be deleted or changed later.

get	        function	undefined	Function to return a value (used for getters).

set	        function	undefined	Function to set a value (used for setters).



🔐 Why use it?
:
- To create read-only or hidden properties. (Hidden properties are done by enumerable: false, which is by default set to hidden).                                 But it still exists and can be accessed directly with    obj.propertyName  .

- To add getters/setters.

- To prevent accidental changes to critical properties.


_______________________________________________________*/







//-> Create another object:
const car = {};

// Defining a   getter   for   myFunction property:
Object.defineProperty(car, "myFunction", {get:function(){
        return "Hello";        
    }
});

console.log(car.myFunction); //outputs: Hello
//-> Here, myFunction is not a function. It is a property.

//-> Writing to a get-only property is not allowed:
car.myFunction = "Hi"; //TypeError: Cannot set property myFunction of #<Object> which has only a getter







//-> Deleting an undeletable property is not allowed:
delete Object.prototype; //TypeError: Cannot delete property 'prototype' of function Object() { [native code] }


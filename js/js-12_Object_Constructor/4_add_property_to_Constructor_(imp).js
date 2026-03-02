//-> Adding a Property to a Constructor
//-> :
//-> You can NOT add a new property to an object constructor:



//-> Constructor function for Human object:
function Human( first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFriend1 = new Human("Pawan", "Doe", 20, "black");
const myFriend2 = new Human("Rikesh", "Doe", 22, "brown");


//-> trying to add a property to an Human object constructor:
//-> Which not gonna work:
Human.Nationality = "Nepali";

console.log(myFriend1.Nationality); //outputs: undefined

console.log(myFriend1,"\n");    
/* outputs:
Human {
    firstName: 'Pawan',
    lastName: 'Joshi',
    age: 20,
    eyeColor: 'black'
}
*/

  
console.log(myFriend2,"\n");    
/* outputs:   
Human {
    firstName: 'Rakesh',
    lastName: 'Joshi',
    age: 22,
    eyeColor: 'brown'
}                             
*/

//-> As you can see, It didn't added the Nationality property.



//--------------------------------------------------------



//-> Another method to add a new property to an object constructor:

//-> To add a new property, you must add it to the constructor function prototype:


//-> Constructor function for Person object:
function Person( first, last, age, eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const myFriend3 = new Person("Pawan", "Doe", 20, "black");
const myFriend4 = new Person("Rikesh", "Doe", 22, "brown");

//-> adding a new property to an object constructor:
Person.prototype.Nationality = "Nepali";


//-> Displaying:

console.log(myFriend3);
/* outputs: 
Person {
  firstName: 'Pawan',
  lastName: 'Doe',
  age: 20,
  eyeColor: 'black'
}
*/

console.log("myFriend3 nationality: ", myFriend3.Nationality,"\n"); //outputs: myFriend3 nationality:  Nepali

console.log(myFriend4);
/* outputs:
Person {
  firstName: 'Rikesh',
  lastName: 'Doe',
  age: 22,
  eyeColor: 'brown'
}
*/

console.log("myFriend4 nationality: ", myFriend4.Nationality,"\n"); //outputs: myFriend4 nationality:  Nepali



//-> From this section's method :

//-> Nationality doesn't shown by normally in browser's console or even in vs-code terminal. 
//-> i.e. by console.log(myFriend3);

//-> Why?



//-> : Because it is defined in     prototype   .
//-> prototype, Hmm... 😒 What's that?

//-> In JavaScript, prototype is a built-in mechanism that allows objects to inherit properties and methods from other objects. Every JavaScript function (which can be used as a constructor) has a special property called    prototype ,  which is an object itself.
//                                ---------------

//-> This    prototype    object is shared by all instances created from that constructor, meaning you can add properties and methods to it that all instances can access. 


//-> Since, we used:
//->  Person.prototype.Nationality = "Nepali";


//-> This adds the property       Nationality       to the        prototype of Person ,     meaning all objects created using Person will inherit this property.


//-> Important: This does not add       Nationality   directly to myFriend3 or myFriend4. Instead, when JavaScript doesn't find     Nationality     in the object itself, it looks in the   prototype chain   and finds it in     Person.prototype .

/*-> i.e.   

  myFriend3,
  myFriend4 : (firstName, lastName, age, eyeColor)
    |
    |
    |->Person.prototype : (Nationality)
            |
            |
            |->Object.prototype : (toString, valueOf,etc.)
                    |
                    |
                    |->null (end of prototype chain)



Here, myFriend3 and myFriend4 are the child object of      Person.prototype     object that means           Person.prototype     is the parent object    of myFriend3 and myFriend4 object.
And hence, myFriend3 and myFriend4 were able to inherit from the    Person.prototype .

*/



//--------------------------------------------------------
//-> To KNOW about     prototype     you may visit:
//-> i) Scalar's website in 'OOP in JavaScript' page in 'JavaScript Inheritance' topic and 
//-> ii) another page 'What is Prototype Inheritance in JavaScript? ' of Scalar's website.
//-> iii) "JS Objects/ JavaScript Object Prototypes" in w3schools. 
//--------------------------------------------------------


//------------------********************--------------------
//-> After taking reference from Scalar website,

//-> make sure you have run above code in browser's console,
//-> then you will understand little bit more about prototype.
//--------------------------------------------------------


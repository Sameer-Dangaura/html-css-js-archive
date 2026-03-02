/*____________________________________________________
JavaScript Classes
:
ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

JavaScript Classes are templates for JavaScript Objects.

JavaScript Class Syntax
Use the keyword class to create a class.

Always add a method named constructor():

Syntax
------
class ClassName {
  constructor() { ... }
}
______________________________________________________*/


//-> Creating a class:
class Car{
    //-> Constructor method:
    constructor(name, year){
        this.name = name;   
        //-> In JavaScript, the     this.name = name    line creates the name property for that object. There's no separate declaration like in C++. 
        //-> And also this.name represent class data_members(fields) as we studied in C++, about this pointer(->) i.e. this->   

        this.year = year;
    }

    //-> Car class method to display:
    display(){
        console.log(this.name + ", " + this.year); 
    }
    
};

//-> Creating two objects using Car class:
const myCar1 = new Car("BMW", 2009);
const myCar2 = new Car("Porche", 2017);

myCar1.display();
myCar2.display();


//-> Actually In JS, class is kind of similar to C++ but not equivalent.

//-> For more, do visit: w3schools...
//-> For more, do visit: "js-75_class_inheritance" .

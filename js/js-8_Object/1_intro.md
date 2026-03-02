> Objects in JS
:

 Q. Are objects in JS are same as c++ ?
Ans:
- No, objects in JavaScript and C++ are not the same—they work quite differently due to the differences in how the two languages handle object-oriented programming.


# Objects in C++
:

* Class-Based
:
  C++ is a class-based language, meaning objects are instances of classes.

* Static and Dynamic Typing
:
  You must define the class structure before creating objects.

* Access Control
:
  C++ supports access specifiers like public, private, and protected.

* Memory Management
:
  You control memory allocation and deallocation, either statically (on the stack) or dynamically (on the heap using new and delete).

____________________________________________________
Example:

#include <iostream>
using namespace std;

class Car {
public:
    string color;
    void display() {
        cout << "Car color: " << color << endl;
    }
};

int main() {
    Car myCar;
    myCar.color = "Red";
    myCar.display(); // Output: Car color: Red
    return 0;
}
____________________________________________________


# Objects in JavaScript
:

* Prototype-Based
:
  JavaScript is prototype-based, meaning objects inherit directly from other objects. There are no class definitions in traditional JavaScript, although ES6 introduced class syntax, which is syntactic sugar over the prototype system.

* Dynamic Typing
:
  You can create objects on the fly without defining a class.

* No Access Control
:
  All properties are public, although closures can be used to emulate private variables.

* Garbage Collection
:
  Memory management is automatic, with garbage collection.

_________________________________________________
Example: JavaScript object creation using object literal method:

const car = {
    color: 'Red',
    display: function() {
        console.log("Car color: ", this.color);
    }
};

car.display(); // Output: Car color: Red
__________________________________________________



# Key Differences
:

* Inheritance Model:
- C++: Uses class-based inheritance (public, private, protected inheritance).
- JavaScript: Uses prototype-based inheritance.

* Typing and Safety:
- C++: Statically typed (type-checked at compile-time).
- JavaScript: Dynamically typed (type-checked at runtime).

* Memory Management:
- C++: Manual memory management.
- JavaScript: Automatic garbage collection.

* Encapsulation:
- C++: Supports private, public, and protected access.
- JavaScript: All properties are public, but closures can be used to create private variables.

* Object Creation:
- C++: Using classes and constructors.
- JavaScript: Using object literals, constructor functions, or the class syntax (introduced in ES6).



# Conclusion
:
- In C++, objects are more rigid and structured due to static typing and class-based inheritance.

- In JavaScript, objects are more flexible and dynamic, using prototypes for inheritance.


If you're coming from a C++ background, JavaScript's prototype-based approach may seem strange at first, but it offers great flexibility for dynamic programming.




> Access js objects
:
- Like in c++ objects,  dot(.) operator can be used to access the data member and member functions in JavaScript.

- As you can see, we used   car.display()   in above example to access the method of object. 

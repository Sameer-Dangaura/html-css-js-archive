> JavaScript Function Parameters
:

# do visit: w3schools.


> Default Parameters
:
If a function is called with missing arguments (less than declared), the missing values are set to undefined.

Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:
____________________________
Example-1:

function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
}
_____________________________



ES6 allows function parameters to have default values.
_______________________________________________________
Example-2: If y is not passed or undefined, then y = 10.

function myFunction(x, y = 10) {
  return x + y;
}
myFunction(5);
________________________________________________________


# Example-2 is better one.                              This type of discussion is also done for constructor default parameter in "js-12_Object_Constructor/2_property_DefaultValues.js"  .






> Function Rest Parameter
: The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
# to know about more Rest operator, do visit: "js-47_destructing/4_array_destructing.js"  .

# do visit: w3schools . 





> The Arguments Object
:
- JavaScript functions have a built-in object called the 
  arguments object.
 -----------

The    argument   object contains an array of the arguments used when the function was called (invoked).

This way you can simply use a function to find (for instance) the highest value in a list of numbers:

In example, you will see use of argument object:
- arguments.length
- arguments[i]

# For example: do visit "w3schools" .


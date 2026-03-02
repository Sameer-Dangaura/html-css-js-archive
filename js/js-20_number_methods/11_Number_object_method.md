> Number Object Methods
:
- These object methods belong to the    Number   object:

  Method	                Description
  ------                    ------------
* Number.isInteger()	    Returns true if the argument is an integer

* Number.isSafeInteger()	Returns true if the argument is a safe integer

* Number.parseFloat()	    Converts a string to a number

* Number.parseInt()	        Converts a string to a whole number



> Number Methods Cannot be Used on Variables
:
# The   Number   methods above belong to the JavaScript     Number   Object.

These methods can only be accessed like:
 Number.isInteger().
 # (is also discussed in "js-19_BigInt/7_new_Number_methods.js")

Using X.isInteger() where X is a variable, will result in an error:
TypeError X.isInteger is not a function.


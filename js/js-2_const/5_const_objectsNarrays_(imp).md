> Constant Objects and Arrays
:
# The keyword   const    is a little misleading.

# It does not define a constant value. It defines a constant reference to a value.
         ^
         |
     imp point (hope you have understood this point because you have knowledge about reference variable from c++).


- Because of this you can NOT:

* Reassign a constant value
* Reassign a constant array
* Reassign a constant object


- But you CAN:

* Change the elements of constant array
* Change the properties of constant object
> For this, do visit: w3schools.


> Note
: 
Many languages allow negative bracket indexing like [-1] to access elements from the end of an object / array / string.

This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.

# The at() method was introduced in ES2022 to solve this problem.




> JavaScript Array delete()
:
# Warning !
Using delete() leaves undefined holes in the array.

Use pop() or shift() instead.




do visit to:
> Automatic toString()

# Note: All JavaScript objects have a toString() method.



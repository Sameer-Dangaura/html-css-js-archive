/*----------------------------------------------------- 
What About   this  ?
:
The handling of   this    is also different in arrow functions compared to regular functions.

In short, with   arrow functions   there are no binding of    this   .
_______________________________________
In JavaScript, "binding    this   " means controlling or fixing what the    this     keyword refers to inside a function—especially when that function is called in a different context.
_______________________________________

- In regular functions the   this    keyword represented the object that called the function, which could be the window, the document, a button or whatever.

- With arrow functions the     this     keyword always represents the object that defined the arrow function (i.e. in alone, represent global means window object   and   in object method, represent object).


Let us take a look at two examples to understand the difference.

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.

The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.
-------------------------------------------------------*/


//-> Example-1: do visit w3schools
//  With a regular function    this     represents the object that calls the function:



//-> Examle-2: do visit w3schools
//  With an arrow function this represents the owner of the function:


/*____________________________________________
🤔Remember these differences when you are working with functions. Sometimes the behavior of regular functions is what you want, if not, use arrow functions.
____________________________________________*/


//-> In both example-1 and example-2  demonstrating binding of   this   in regular function and arrow function, you will get encounter DOM Event Listener.
/*-> So, for that:
The addEventListener() method attaches an event handler to the specified element.
Syntax🛠️:
____________________________________________________
element.addEventListener(event, function, useCapture);
____________________________________________________

where, event can be (like "click" or "mousedown" or any other HTML DOM Event.)

The second parameter is the function we want to call when the event occurs, which is passed as reference (we have talked about how to pass function as a reference in "js-22_arrays/7_looping_array_element.js").

The third parameter is optional, for that do visit w3schools.


##🧐 For more about event listener, do visit w3schools.

*/


//________________________________________________________
//-> We can convert a JSON text to JS object using     JSON.parse(),    we gonna discuss this here. 

//-> or,

//-> We can convert JS object to a JSON text using     JSON.stringify(),    for this do visit "js-11_Object_Display/6_display_Using_JSON.stringify().js".
//________________________________________________________

/*
> Converting a JSON Text to a JavaScript Object
:
- A common use of JSON is to read data from a web server, and display the data in a web page.



For simplicity, this can be demonstrated using a string as input.

First, create a JavaScript string containing JSON syntax:
_____________________________________________
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
_____________________________________________

Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:
_____________________________
const obj = JSON.parse(text);
_____________________________

Finally, use the new JavaScript object in your page:
*/

//-> Example: do visit w3schools.

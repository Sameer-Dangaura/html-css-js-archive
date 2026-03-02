//-> JavaScript Display Objects
//-> :

//-> How to Display JavaScript Objects?
//-> : Displaying a JavaScript object will output    [object Object]  in document.

//--------------------------------------------------------
//-> This box code is for document not for console:

//-> Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
//-> Display Object
document.getElementById("demo").innerHTML = person;   //outputs in document: [object Object]

//--------------------------------------------------------


//-> Some solutions to display JavaScript objects are:

//-> Displaying the Object Properties by name
//-> Displaying the Object Properties in a Loop
//-> Displaying the Object using     Object.values()
//-> Displaying the Object using     JSON.stringify()

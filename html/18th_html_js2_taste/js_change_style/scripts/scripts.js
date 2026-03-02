function myFunction(){
    document.getElementById("demo").style.fontFamily = "courier";
    document.getElementById("demo").style.fontSize = "20px";
    document.getElementById("demo").style.color = "white";
    //.style.color = "white";: Once the element is selected, this part of the code changes the CSS color property of the element to "white".   And so on for others.
    document.getElementById("demo").style.backgroundColor = "black";
}

//In above, did you notice :

//fontFamily is used instead of font-family,
//fontSize is used instead of font-size,
//backgroundColor is used instead of background-color.
//this is how it is used in JS to use CSS.

//This camelCase convention applies to all multi-word CSS properties in JavaScript.
//-> Looping Array Elements
//-> :
//-> One way to loop through an array, is using a for loop:

const fruitBox = ["Mango", "PineApple", "Pomogranate"];
let text = "";

for( let i=0 ;  i < fruitBox.length ; i++ ) {
    text = text + fruitBox[i] + "\n";
}

console.log(text);  
/* 
outputs: 
Mango
PineApple
Pomogranate
*/

//-> This above way we have used it in C, C++ and here, also we tried to do it and did it.





//-> You can also use the Array.forEach() function:     The .forEach() method is an array iteration method which  calls a function (that function which is passed as parameter to .forEach() method) for each element in an array.
let text2 = "";

function myFunction(value) {    //a user-defined function for displaying, using text2 which is a string varaible 
    text2 = text2 + value + "\n";
}

fruitBox.forEach( myFunction );   //here, myFunction(i.e. callback function) is passed as reference to forEach() method, and then forEach() calls a function(which is callback function) for each element in an array. That's why we don't used parenthesis with myFunction.

console.log(text2); 
/* 
outputs:
Mango
PineApple
Pomogranate
*/ 


//________________________________________
//-> To know more about callback function, do visit "js-43_Maps/3_Map.groupBy().js" .
//________________________________________


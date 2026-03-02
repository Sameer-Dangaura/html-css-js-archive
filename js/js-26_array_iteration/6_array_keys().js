//-> JavaScript Array keys()
//-> :
//-> The array.keys() method returns an Array Iterator object with the keys of an array.

//-> Example: Create an Array Iterator object, containing the keys of the array:

const fruitsBox = ["Banana", "Apple", "Papaya", "Carrot"];

const keysList = fruitsBox.keys()
//-> The .keys() method returns an iterator containing the keys (indexes) of an array.
//-> here, keysList is an iterator which is holding the keys(indexes) of fruitsBox. 


//-> Displaying:

console.log(keysList);  //outputs: Object [Array Iterator] {}

let text = "";

for(let x of keysList) {
    text = text + x + "\n";
}
//-> for...of loop iterates over values of an iterable object.
//-> If you don't know about the concept of for...of loop, do visit "js-11_Object_Display/5_Concept_of_for_of_loop.js" .


console.log(text);  
/* outputs: 
0
1
2
3
*/



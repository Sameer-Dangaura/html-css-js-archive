//-> JavaScript Array filter()
//-> :
//-> The filter() method creates a new array with array elements that pass a test.

//-> This example creates a new array from elements with a value larger than 18:

const myArray = [16,19,26,18,14,28,30,22,12,8,44];

function myFunction(value){//This function will return that value which is greater than 18.
    return value > 18;
}

const filteredArray = myArray.filter( myFunction );//here, myFunction(i.e. callback function) is passed as reference to filter() method . These type of discussion is also done in "js-22_arrays/7_looping_array_elements.js" . And filter() method will call a function (a callback function) once for each array element.

console.log(filteredArray);
/* outputs: 
[ 19, 26, 28, 30, 22, 44 ]
*/


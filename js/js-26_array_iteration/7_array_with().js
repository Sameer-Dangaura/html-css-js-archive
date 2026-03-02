//-> JavaScript Array with() Method
//-> :
//-> ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.

const myArray = ["Apple", "Banana", "Mango"];

//-> updating the index-2 element without manipulating original array:
const updatedArray = myArray.with(2, "Grapes");

console.log(updatedArray);  
/* outputs: 
[ 'Apple', 'Banana', 'Grapes' ]
*/


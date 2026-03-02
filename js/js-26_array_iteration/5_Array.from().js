//-> JavaScript Array.from()
//-> :
//-> The Array.from() method returns an Array object from any object with a length property or any iterable object.


//-> Example: Create an Array from a String:

let text = "ABCDEFGHIJK";
const stringArray = Array.from(text);

console.log(stringArray);
/* outputs: 
[
  'A', 'B', 'C', 'D',
  'E', 'F', 'G', 'H',
  'I', 'J', 'K'
]
*/

console.log(typeof stringArray);    //outputs: object
console.log(stringArray instanceof Array);  //outputs: true


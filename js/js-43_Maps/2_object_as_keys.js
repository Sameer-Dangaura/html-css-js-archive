//-> Objects as Keys
//->:
//-> Being able to use objects as keys is an important Map feature.

//-> Create objects:
const apples = {name: "Apple"};
const bananas = {name: "Banana"};
const grapes = {name: "Grapes"};

//-> Create an empty Map:
const fruitBox = new Map();

//-> Add new Elements in an empty Map:
fruitBox.set(apples, 200);
fruitBox.set(bananas, 100);
fruitBox.set(grapes, 300);


console.log(fruitBox.get(apples)); //outputs: 200
//-> Remember: The key is an object (apples), not a string ("apples"):
console.log(fruitBox.get("apples")); //outputs: undefined

console.log(apples); //outputs: { name: 'Apple' }

console.log(fruitBox);
/* outputs:
Map(3) {
  { name: 'Apple' } => 200,
  { name: 'Banana' } => 100,
  { name: 'Grapes' } => 300
}
*/


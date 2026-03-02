//-> Adding Array Elements
//-> :
//-> The easiest way to add a new element to an array is using the push() method:                               (which is also done in "js-2_const/6_constantArrays.js" and "js-22_arrays/8_array.push()")




//-> New element can also be added to an array using the    length   property:
const fruitsBox = ["PineApple", "Banana", "Pomegranate"];

console.log("fruitsBox length:", fruitsBox.length);
//outputs: fruitsBox length: 3
console.log(fruitsBox[2]);  //ouptus: Pomegranate
console.log(fruitsBox[3]);  //outputs: undefined


//-> adding element in an fruitsBox:
fruitsBox[fruitsBox.length] = "Grape";

console.log("New length of fruitsBox:", fruitsBox.length);
//outputs: New length of fruitsBox: 4
console.log(fruitsBox[3]);  //ouptus: Grape


//___________________________________________________
//-> The    array.length    property also discussed in "5_array_properties_n_methods.js" . 
//___________________________________________________



//-> WARNING !
//-> Adding elements with high indexes can create undefined "holes" in an array:

fruitsBox[7] = "Papaya";
console.log(fruitsBox); 
/*outputs: [
  'PineApple',
  'Banana',
  'Pomegranate',
  'Grape',
  <3 empty items>,
  'Papaya'
]
*/

//-> Creating an Array                                    (you can also do visit to "1_js_variables/11_array.js" and "js-2_const/6_constantArrays.js")
//-> :
//-> Using an array literal is the easiest way to create a JavaScript Array.
/*____________________________________________
Syntax:

const array_name = [item1, item2, ...];     
____________________________________________*/

//-> It is a common practice to declare arrays with the const keyword.

const fruits = ["apple", "banana", "orange", "papaya"];
console.log(fruits);    //outputs: [ 'apple', 'banana', 'orange', 'papaya' ]
console.log(fruits[0]); //outputs: apple
console.log(fruits[1]); //outputs: banana




//-> You can also create an empty array, and then provide the elements:

//-> create an empty array using literal method:
const cars = [];

//-> adding elements in an array:
cars[0] = "BMW";
cars[1] = "Ferrari";
cars[2] = "Audi";

console.log(cars);  //outputs: [ 'BMW', 'Ferrari', 'Audi' ]
console.log(cars[0]);   //outputs: BMW
console.log(cars[1]);   //outputs: Ferrari




//________________________________________________________

//-> Using the JavaScript Keyword new                   (detailly discussed in "11_new_Array().js")
//-> :
//-> The following example also creates an Array, and assigns values to it:

const players = new Array("Ronaldo", "Messi", "Neymar");
console.log(players);   //outputs: [ 'Ronaldo', 'Messi', 'Neymar' ]
console.log(players[0]);   //outputs: Ronaldo
console.log(players[1]);   //outputs: Messi

console.log(typeof (new Array()));    //outputs: object
console.log(typeof ([]));   //outputs: object

//-> Since, without keyword new, the literal method also create an array which is an Array object. This new keyword method also create an array which is an Array object using   Array()     constructor function .

//-> So, there is no difference.
//-> But, by using literal method makes simple, readable and increase execution speed compared to new Array() method.


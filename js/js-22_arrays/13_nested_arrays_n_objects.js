//-> Nested Arrays and Objects
//-> :
//-> Values in objects can be arrays, and values in arrays can be objects:


const myObj = { //this is an object
    fullName : "John Doe",
    age : "33",
    cars : [    //this is an array which is "myObj.cars"

        {   //this is an object which is "myObj.cars[0]"
            name : "BMW",
            model : ["320", "X3", "X5"] //this is an array which is "myObj.cars[0].model"
        },

        {   //this is an object which is "myObj.cars[1]"
            name : "Fiat", 
            model : ["500", "Panda"]    //this is an array which is "myObj.cars[1].model"
        }

    ]
};


console.log(myObj); 
/* outputs:
{
  fullName: 'John Doe',
  age: '33',
  cars: [ { name: 'BMW', model: [Array] }, { name: 'Fiat', model: [Array] } ]
} 
*/

console.log(myObj.fullName); 
//-> outputs: John Doe

console.log(myObj.age); 
//-> outputs: 32

console.log(myObj.cars); 
/* outputs:
[
  { name: 'BMW', model: [ '320', 'X3', 'X5' ] },
  { name: 'Fiat', model: [ '500', 'Panda' ] }
]
*/

console.log(myObj.cars[0]); 
/* outputs: 
{ name: 'BMW', model: [ '320', 'X3', 'X5' ] }
*/

console.log(myObj.cars[0].name); 
//-> outputs: BMW

console.log(myObj.cars[0].model); 
/* outputs: 
[ '320', 'X3', 'X5' ]
*/

console.log(myObj.cars[0].model[0]); 
//-> outputs: 320

console.log(myObj.cars[0].model[1]); 
//-> outputs: X3

console.log(myObj.cars[0].model[2]); 
//-> outputs: X5

console.log(myObj.cars[1]); 
/* outputs:
{ name: 'Fiat', model: [ '500', 'Panda' ] }
*/ 

console.log(myObj.cars[1].name); 
//-> outputs: Fiat

console.log(myObj.cars[1].model); 
/* outputs:
[ '500', 'Panda' ]
*/ 

console.log(myObj.cars[1].model[0]); 
//-> outputs: 500

console.log(myObj.cars[1].model[1]); 
//-> outputs: Panda




//____________________________________________________
// (if you don't know about for...in loop do visit "js-11_Object_Display/3_display_Object_Property_in_Loop.js")

//-> To access arrays inside arrays, use a for-in loop  for each array:

for(let i in myObj.cars) {  // i takes index of an array(i.e. myObj.cars) and iterate whole array, until every indeces doesen't get visited.
 
    console.log(myObj.cars[i].name);

    for(let j in myObj.cars[i].model) { // j takes index of an array(i.e. myObj.cars[i].model) and iterate whole array, until every indeces doesen't get visited.

        console.log(myObj.cars[i].model[j]);

    }
    console.log("\n");

}

//-> Hope, you have understood above loop inside loop. Since, you have concept of loops, loops inside loop , etc. in C, C++. 

/* outputs: 
BMW
320
X3
X5


Fiat
500
Panda
*/




//____________________________
//-> Let's see, what we get if we don't use index with an array and just try to get inside arrays, object property, trying to access object like as an object:
console.log(myObj.cars.name); //outputs: undefined

//-> Why I did tried this way because of "js-43_Maps/3_Map.groupBy().js" . Do visit there and you will also get curosity.
//____________________________


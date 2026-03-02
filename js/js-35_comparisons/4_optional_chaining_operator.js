//-> The Optional Chaining Operator (?.)
//-> :
//-> The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).


//-> Creating an empty myCar object:
const myCar = {};

//-> Adding properties to myCar object:
myCar.type = "fiat";  
myCar.model = "500";
myCar.color = "white";


console.log(myCar);
//-> outputs: { type: 'fiat', model: '500', color: 'white' }

console.log(myCar.name);    //outputs: undefiined
console.log(myCar?.name);   //outputs: undefined

//-> Nothing different then, 
//-> Why Use the Optional Chaining Operator (?.)?
//-> :
//-> The optional chaining (?.) operator in JavaScript is used to safely access deeply nested properties of an object without causing errors if a property is null or undefined.


//-> Creating an empty carOwner object: 
const carOwner = {};

//-> Adding propeties to CarOwner object:
carOwner.name = "John Doe";
carOwner.address = "KTM";
carOwner.car = myCar;   //taking reference of myCar object as a property car of carOwner object.  

console.log(carOwner);
/* outputs: 
{
  name: 'John Doe',
  address: 'KTM',
  car: { type: 'fiat', model: '500', color: 'white' }
}
*/

console.log(carOwner.car.type);    //outputs: fiat


console.log(carOwner.bike); //outputs: undefined
//-> since, the bike is not the property of carOwner.


//console.log(carOwner.bike.type);//TypeError: Cannot read properties of undefined (reading 'type')

//-> Instead of using this, use optional chaining operator method:
console.log(carOwner.bike?.type);   
//-> outputs: undefined ,(No error)


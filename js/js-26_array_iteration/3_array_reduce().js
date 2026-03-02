//-> JavaScript Array reduce()
//-> :
//-> The reduce() method runs a function on each array element to produce (reduce it to) a single value.

//-> The reduce() method works from left-to-right in the array. See also reduceRight().

//-> The reduce() method does not reduce the original array.

//-> This example finds the sum of all numbers in an array:

const myArray = [1,2,3,4,5,6,7,8,9,10];

function myFunction(total, value){//user-defined callback function i.e.:
//->  function myFunction(accumulator, currentValue) { 
//->  return something; 
//-> }
    
    return total += value;
}

//-> Note that the function takes 2 arguments
//-> :
//-> The total = (the initial value / previously returned value/) which is an accumulator
//-> The item value or currentValue


const reducedArray = myArray.reduce(myFunction);//here, myFunction is passed as reference to reduce() method. These type of discussion is also done in "js-22_arrays/7_looping_array_elements.js" .

console.log(reducedArray);
/* outputs: 55
*/


/*----------------------------------------------------
Q. Does reduce() methods callback function allows to use accumulator ?
Ans: 

ChatGPT said:
Yes! The callback function in reduce() must use the accumulator. The accumulator stores the result of previous iterations and keeps updating as reduce() processes each array element.

----------------------------------------------------*/


//______________________________________________________

//-> The reduce() method can accept an initial value:

const reducedArray2 = myArray.reduce(myFunction, 100);
//-> the 100 value is gonna passed to 'total' named parameter of myFunction which is an accumulator.

console.log(reducedArray2); 
/* outputs: 155
*/



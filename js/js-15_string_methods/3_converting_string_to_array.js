//-> Converting a String to an Array
//-> :
//-> If you want to work with a string as an array, you can convert it to an array.

//______________________________________________________

//-> JavaScript String split()
//-> :
//-> A string can be converted to an array with the     split() method:

//-> String having seperated by commas
let text = "a,b,c,d,e";


const myArray1 = text.split(",");   //split on commas
console.log(myArray1);   
//-> outputs: [ 'a', 'b', 'c', 'd', 'e' ]

console.log("myArray1[0]:", myArray1[0]);
//-> ouptus: myArray1[0]: a 
console.log("myArray1[1]:", myArray1[1], "\n");   
//-> ouptuts: myArray1[1]: b




const myArray2 = text.split("");    //split on without spaces
console.log(myArray2);  
/* outputs:
    [
  'a', ',', 'b',
  ',', 'c', ',',
  'd', ',', 'e'
]
*/
console.log("myArray2[0]:", myArray2[0]);
//-> ouptus: myArray2[0]: a 
console.log("myArray2[1]:", myArray2[1], "\n");   
//-> ouptuts: myArray2[1]: ,




const myArray4 = text.split(" ");    //split on spaces
console.log(myArray4);  
/* outputs: [ 'a,b,c,d,e' ]
Since, in the original string there was no spaces included. While spliting on the basis of spaces, it doesn't found the space inside string. So, it is treated as a whole in a single index of array.
*/
console.log("myArray4[0]:", myArray4[0]);
//-> ouptus: myArray4[0]: a,b,c,d,e
console.log("myArray4[1]:", myArray4[1], "\n");   
//-> ouptuts: myArray4[1]: undefined




const myArray3 = text.split("|");   //split on pipe
console.log(myArray3);  //outputs: [ 'a,b,c,d,e' ]
console.log("myArray3[0]:", myArray3[0]);   
//-> ouptus: a,b,c,d,e
console.log("myArray3[1]", myArray3[1], "\n");   
//-> ouptus: undefined




//_______________________________________________________

//-> Now, let string having without seperated by commas
let text2 = "abcde";

let myArray11 = text2.split(",")    //split on commas
console.log(myArray11); 
//-> outputs: [ 'abcde' ]
//-> Since, there was no commas in original string (i.e. text2). So, it is not splited on commas.

console.log("myArray11[0]:", myArray11[0])  
//->ouptus: myArray11[0]: abcde
console.log("myArray11[1]:", myArray11[1])  
//->outputs: undefined

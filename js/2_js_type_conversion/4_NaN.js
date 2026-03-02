//-> This given below's example is part of a explicit conversion. Since, there is used   Number()   function for conversion to number explicitly.


//-> *) Non-numeric String Results to NAN 
//-> :
//->  In JavaScript, converting non-numeric strings to numbers using   Number()   function result to    NAN,
//-> indicating  "Not-a-Number".

//-> For instance,   Number("Hello") ,   Number("true") , or   Number("")    
//-> all yield  NaN,
//-> because these strings lack numeric value.


let result = Number("Hello") + 10;

console.log(typeof result); //outputs: number
console.log(result);    //outputs: NaN
console.log(isNaN(result)); //outputs: true
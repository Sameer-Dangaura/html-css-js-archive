//-> Operator Precedence
//-> :
//->  Operator precedence describes the order in which operations are performed in an arithmetic expression.



//--------------------------------------------------------

//-> This Operator precedence code is for educational purpose only.
//-> It is a bad habit where a variable contain too many operators and operands without
//-> having parenthesis...

let numValue = 100 + 50 * 3;
console.log(numValue);  //outputs: 250


//-> Is the result of example above the same as 150 * 3, or is it the same as 100 + 150?

//-> Is the addition or the multiplication done first?

//-> Ans:
//->     As in traditional school mathematics, the multiplication is done first.
//-> Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).




//--------------------------------------------------------

//-> And (as in school mathematics) the precedence can be changed by using parentheses.

//-> When using parentheses, the operations inside the parentheses are computed first:

let numberValue = (100 + 50) * 3;
console.log(numberValue);   //outputs:  450



//--------------------------------------------------------

//-> When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:

let numberVariable1 = 100 + 50 - 3 ;
console.log(numberVariable1);    //outputs: 147

let numberVariable2 = 100 * 50 / 3 ;
console.log(numberVariable2);   //outputs: 1666.6667
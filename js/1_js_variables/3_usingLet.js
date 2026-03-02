//-> Variable declaration using let:

//-> Using  'let'  is better than  'var'.

//-> 'let'   is introduced in ES6(ECMAScript 2015)

//-> 'let'   allows you to declare block-scoped variables, significantly improving code readability and reducing errors related to variable scope.
//--------------------------------------------------------
//-> # block-scoped, hmm... what is that?
//-> :-
//->  A block is a section of code enclosed by curly braces (i.e. {})

//-> e.g: i) if()     ii) for()        iii) function()
//->         {            {                 {
//->              }            }                   }
//--------------------------------------------------------


//-> scope of let:
if(1)
{
    let myRank = 2;
    console.log(myRank);    //outputs: 2
}
// console.log(myRank); //This is ReferenceError: myRank is not defined. Because you are trying to access from out of the scope.


//-> scope of var:
if(1)
{
        var myName = "Ram Lal";
        console.log(myName);    //outputs: Ram Lal
}
console.log(myName);    //outputs: Ram Lal
//-> accessed from out of the scope.
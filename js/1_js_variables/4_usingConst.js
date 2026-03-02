//-> Variable declaration using const:

//->  'const'  is utilized for defining variables with values that are intended to remain constant and unchangeable.

//-> Similar to  'let',  'const'  also adheres to block-scoping rules.

//-> scope of const:
if(1)
    {
        const myName = "Ram Lal";
        console.log(myName);    //outputs: Ram Lal
    }
//    console.log(myName);  //This is ReferenceError: myName is not defined. Because you are trying to access from outside of the scope.
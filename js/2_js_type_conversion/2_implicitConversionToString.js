//-> 1) Implicit conversion (Automatic conversion):

//-> a) Implicit conversion to String
//-> :
//->  Implicit type conversion in javascript to String refers to the automatic conversion of non-string values into string type when they are used in a context where a string is expected.


//--------------------------------------------------------
//-> we can use:   
// 'typeof( variable_name )'  or,
// 'typeof variable_name'
//-> to know the type of the variable.
//-------------------------------------------------------




//-> numeric string used with + gives string type:
let result;
result = "3" + 2;   //Here, addition(+) is working as concatenation of string.

console.log(result);    //outputs: '32'
console.log(typeof(result));    //outputs: string
console.log(typeof result); //outputs: string
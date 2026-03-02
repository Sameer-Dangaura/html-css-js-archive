//-> Constants in JavaScript:
//->  We declare a constant using the keyword   'const'.


//-> Syntax:
//-------------------------------------------
//| const <variable-name> = <value>;       |
//-------------------------------------------




//-> These constants are similar to variables but have more properties which are different from variables, such as:


//-> a) the constant   must be initialized   when you declare it,
//-> otherwise it will throw a "SyntaxError:Missing initializer in const declaration".

//-> Example-1: For that just run this example's portions only

let ages;   // we can declare  let
//const age;  //we cannot just declare  const. It will throw an error as we haven't initialized the constant.





//-> b) once assigned a value to a constant you can't reassign values afterward.
//-> that is, a value is fixed at constant.

//->Example-2: 
//->let:
let year = 2020;
console.log(year);  //outputs: 2020
//we can reassign other variable:
year = 2025;    
console.log(year);  //outputs: 2025

//->const:
const PI = 3.1452;
//->But, we cannot reassign const variable or constants:
//PI = 3.1452;        //TypeError: Assignment to constant variable.





//-> Note:
//-> Though we cannot change the value of the constants, but if the constant value is of an object,
//-> then, we can modify const Object's properties:

const myCar = {
    company: "BMW",
    price: "350K"
};
console.log(myCar); //outputs: { company: 'BMW', price: '350K' }

//-> reassinging const object by normal way:
//-> which throws an Error.
// myCar = {
//     company: "Audi" 
// };
// console.log(myCar); //TypeError: Assignment to constant variable.

//-> reassinging const object by dot operator:
myCar.company = "Audi";
console.log(myCar);     //outputs: { company: 'Audi', price: '350K' }


//-> You can even add or update or remove properties from a "constant object",
//-> because you are just changing the details of the object, not the reference.
//-> the constant will still point to the same object.
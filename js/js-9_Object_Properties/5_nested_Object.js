//-> Nested Objects
//-> :

//-> if you have studied   nested structure    in c , you will find it easy.

//-> Property values in an object can be other objects:

const person = {
    name: "Simren Den",
    age: 21,
    
    //object inside object:
    myCars: {
        car1: "BMW",
        car2: "Audi",
        car3: "Toyata"
    }
};

//-> You can access nested objects using the dot notation or the bracket notation:

console.log(person.myCars.car1);    //outputs: BMW
//-> or,
console.log(person.myCars["car2"]); //ouptus: Audi
//-> or,
console.log(person["myCars"]["car3"]);//outputs: Toyata


//->or, you can access nested objects using the expression also:
let expression1 = "myCars";
let expression2 = "car3";
console.log(person[expression1][expression2]);  //outputs: Toyata

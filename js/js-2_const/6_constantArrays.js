//--------------------------------------------------------
//-> ! At 1st, do visit "5_const_bjectsNarrays_(imp).md".
//--------------------------------------------------------

//-> Constant Arrays
//-> :
//->  You can change the elements of a constant array:

//-> creating constant array:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);  //outputs: [ 'Saab', 'Volvo', 'BMW' ]


//-> changing elements of constant array:
cars[0] = "Toyata";
console.log(cars);  //outputs: [ 'Toyata', 'Volvo', 'BMW' ]


//-> adding elements in constant array:
cars.push("Audi");
console.log(cars);  //outputs: [ 'Toyata', 'Volvo', 'BMW', 'Audi' ]




//--------------------------------------------------------

//-> But you can NOT reassign the array:

const cars = ["Saab", "Volvo", "BMW"];

//-> trying to reassign array:
cars = ["Toyata", "Volvo", "Audi"]; //TypeError: Assignment to constant variable.
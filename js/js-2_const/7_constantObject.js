//--------------------------------------------------------
//-> ! At 1st, do visit "5_const_objectsNarrays_(imp).md".
//--------------------------------------------------------

//-> Constant Objects
//-> :
//->  You can change the properties of a constant object:


//-> creating constant object:
const cars = {
    type : "Fiat",
    model : "500",
    color: "white"
};
console.log(cars);  //outputs: { type: 'Fiat', model: '500', color: 'white' }


//-> changing a property of constant object:
cars.color = "blue";
console.log(cars);  //outputs: { type: 'Fiat', model: '500', color: 'blue' }


//-> adding a property of constant object:
cars.owner = "Sameer";
console.log(cars);  //outputs: { type: 'Fiat', model: '500', color: 'blue', owner: 'Sameer' }




//--------------------------------------------------------

//-> But you can NOT reassign the object:

const cars = {
    type : "Fiat",
    model : "500",
    color: "white"
};


//-> trying to reassign the object:
cars = {
    type:"Volvo",
     model:"EX60",
     color:"red"
};  //outputs: TypeError: Assignment to constant variable.
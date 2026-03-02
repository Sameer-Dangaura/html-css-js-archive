//-> JavaScript Variables
//-> :
//-> js variables can contain only one value:

// let car = "Fiat";
// console.log(car);




//-> JavaScript Objects
//-> :
//-> js objects can contain many values:

const car = {
    type: "Fiat",
    model: 500,
    color: "white"
};

console.log(car);   //outputs: { type: 'Fiat', model: 500, color: 'white' }

console.log("I have car, whose type is", car.type, "and model is", car.model, "whose color is", car.color); 
//outputs: I have car, whose type is Fiat and model is 500 whose color is white


//______________________________________________________
//-> Note:
//-> It is a common practice to declare objects with the const keyword.

//-> Learn more about using const with objects in the chapter: js-2_const.
//______________________________________________________

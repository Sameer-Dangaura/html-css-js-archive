//-> Adding New Properties
//-> :
//->  You can add new properties to an existing object by simply giving it a value:


const person = {
    firstName: "Lana",
    lastName: "Joshi",
    age: 22,
    eyeColor: "gray"
};

//->adding new property:
person.address = "mnr";
person.phone = 980642222;

console.log(person);   //outputs: {
                            //     firstName: 'Lana',
                            //     lastName: 'Joshi',
                            //     age: 22,
                            //     eyeColor: 'gray',
                            //     address: 'mnr',
                            //     phone: 980642222
                            //   }
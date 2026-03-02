//-> Examples for variables:

//-> Example-3:
//-> In JavaScript, objects are composed of key-value pairs grouped together.
//-> They are a powerful way to structure data and functionality together.
//-> Each property or method in an object is accessed by its key name.

//-> using another syntax to access object properties:

const person = {
    name: "Tek Raj",
    age: 30,
    address: "mnr"
};

console.log(person.name);
console.log(person["name"]);     //this is another syntax to access object properties.

person["name"] = "Tamu";
console.log(person);    //outputs: { name: 'Tamu', age: 30, address: 'mnr' }
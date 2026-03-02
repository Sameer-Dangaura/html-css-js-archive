//-> Display object property Using JSON.stringify()
//-> :
//->  JavaScript objects can be converted to a string with JSON method JSON.stringify().

//-> JSON.stringify() is included in JavaScript and supported in all major browsers.

//--------------------------------------------------------
//-> Note:
//-> The result will be a string written in JSON notation:

//-> {"name":"John","age":50,"city":"New York"}
//--------------------------------------------------------

//-> Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

//-> Stringify Object
let myString = JSON.stringify(person);

console.log(myString);    //outputs: {"name":"John","age":30,"city":"New York"}

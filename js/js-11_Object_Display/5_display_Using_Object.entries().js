//-------------------------------------------------------
//-> For this, you need to visit: "5_Concept_of_for_of_loop and array_destructing.js".
//-------------------------------------------------------

//-> Using Object.entries()
//-> :
//->  Object.entries() makes it simple to use objects in loops:

//-> The Object.entries() method returns an array of the key/value pairs of an object.

//-> The Object.entries() method does not change the original object.


//-> Create an Object:
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

//-> An empty text:
let text = "";

//-> Object.entries(person): This method returns an array of the object's own enumerable string-keyed property [key, value] pairs. For the person object, it returns:
/*
    [
        ["name", "John"],
        ["age", 30],
        ["city", "New York"]
    ]
*/

for(let [propertyName, propertyValue] of 
    Object.entries(person)){   //for...of loop with array destructuring

    text += propertyName + ": " + propertyValue + "\n";
}


console.log(text);  //outputs: name: John
                    //         age: 30
                    //         city: New York

//-> Create a Map:
const fruits = new Map([
    ["apples", 300],
    ["bananas", 100],
    ["oranges", 350]
]);

//-> Empty string:
let text = "";

//-> Destructing:
for(let [fruit, value] of fruits){
    text += fruit + ": " + value + "\n";
}

console.log(text); 
/*outputs: 
apples: 300
bananas: 100
oranges: 350
*/


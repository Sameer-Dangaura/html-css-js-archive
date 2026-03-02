//-> JavaScript dollar sign ($):

//-> Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names:


let $name = "Padam";
 
function $calculateSum(a, b){
    return a + b;
}

console.log($name);     //outputs: Padam
console.log($calculateSum(2,3));    //outputs: 5


//-> In js, the dollar sign ($) has no special meaning within js langauge itself.

//-> But,
//-> using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.

//-> In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); means "select all p elements".
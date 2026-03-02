//-> Built-in JavaScript Constructors
//-> :
//-> JavaScript has built-in constructors for all native objects:

console.log("Type of new Object:", typeof(new Object()) );
console.log("Type of new Array:", typeof(new Array()) );
console.log("Type of new Map:", typeof(new Map()) );
console.log("Type of new Set:", typeof(new Set()) );
console.log("Type of new Date:", typeof(new Date()) );
console.log("Type of new RegExp:", typeof(new RegExp()) );
console.log("Type of new Function:", typeof(new Function()) );
console.log("\n");

/* outputs:
Type of new Object: object
Type of new Array: object
Type of new Map: object
Type of new Set: object
Type of new Date: object
Type of new RegExp: object
Type of new Function: function
*/


//--------------------------------------------------------
//-> Note:
//-> The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.
//--------------------------------------------------------


//----------------****************************------------
//-> Did you KNOW?

//-> Use object literals {} instead of new Object().

//-> Use array literals [] instead of new Array().

//-> Use pattern literals /()/ instead of new RegExp().

//-> Use function expressions () {} instead of new Function().



//-> Example:

console.log('Type of " ":', typeof "");
console.log("Type of {}:", typeof {});
console.log("Type of []:", typeof []);
console.log("Type of /()/:", typeof /()/);
console.log("Type of function(){}:", typeof(function(){}) );

/* outputs:
Type of " ": string
Type of {}: object
Type of []: object
Type of /()/: object
Type of function(){}: function
*/

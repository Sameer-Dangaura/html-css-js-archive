//-> This given below's example is part of a explicit conversion. Since, 
//-> you are calling   new Date(milliseconds) ,   you are explicitly invoking the Date constructor with a numeric argument. This tells JavaScript directly, "Please create a Date object that represents this specific point in time,

//-> g) Converting Numbers to Dates
//-> :
//->  Creating date objects from numeric values 
//-> entails(means: involve) instantiating a new date using the desired timestamp.


let milliseconds = 1620237600000; // Example timestamp

let dateFromNumber = new Date(milliseconds);    //If you have query about this line related to    new Date()     , then you can visit "8_convertingDateToNumber.js".

console.log(dateFromNumber); // Output: Date object representing the specified timestamp

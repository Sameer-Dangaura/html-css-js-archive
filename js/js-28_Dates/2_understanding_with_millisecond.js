//--------------------------------------------------------
//-> If you don't about the UTC format in Date, do visit "1_intro.js"
//--------------------------------------------------------


//-> Creating a Date Object Using Milliseconds (new Date(milliseconds))
//-> :
//-> The new Date(milliseconds) constructor creates a date object by adding the given milliseconds to the Unix Epoch time (January 1, 1970, 00:00:00 UTC).


//__________________________
//-> 1️⃣ What is Unix Epoch?
//-> :
//-> The Unix Epoch (also called timestamp zero) is January 1, 1970, 00:00:00 UTC.
//-> JavaScript counts time in milliseconds from this point.
//-> new Date(0) represents exactly this epoch time:


//-> Example: Creating Dates Using 0 Milliseconds
const myDate1 = new Date(0);

console.log(myDate1);   
//-> outputs: 1970-01-01T00:00:00.000Z

//-> new Date(0) means 0 milliseconds after Unix Epoch → January 1, 1970, UTC.


//________________________________
//-> Example: Creating Dates Using 1000 Milliseconds i.e. Adding 1000 Milliseconds to Unix Epoch
const myDate2 = new Date(1000);

console.log(myDate2);
//-> outputs: 1970-01-01T00:00:01.000Z                  , 1 second after epoch

//-> 1000 ms = 1 second, so it moves 1 second forward from 1970-01-01.


//________________________________
//-> Example: Adding Large Milliseconds (Future Dates)
const myDate3 = new Date(1742291665080);

console.log(myDate3);
//-> outputs: 2025-03-18T09:54:25.080Z

//-> The number 1742291665080 represents milliseconds since January 1, 1970.


//________________________________
//-> Example: Negative Milliseconds (Past Dates)
const myDate4 = new Date(-1000);

console.log(myDate4);
//-> outputs: 1969-12-31T23:59:59.000Z                  , 1 second before epoch

//-> Negative values move the date backward.

//________________________________


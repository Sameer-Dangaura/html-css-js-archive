//--------------------------------------------------------
//-> If you don't about the UTC format in Date, do visit "1_intro.js"
//--------------------------------------------------------


//-> Displaying Dates
//-> :
//-> This statement is for browser's console:
//-> JavaScript will (by default) output dates using the toString() method. This is a string representation of the date, including the time zone. The format is specified in the ECMAScript specification:

const myDate1 = new Date();

console.log(myDate1);   //outputs varies on time
//-> outputs: 2025-03-19T12:17:41.004Z






//-> When you display a date object in HTML, it is automatically converted to a string, with the toString() method. But we are here running it into Node.js server. So, what happens let's see:

const myDate2 = new Date();

console.log(myDate2);   //output vaires on time
//-> outputs: 2025-03-19T12:23:39.864Z

//-> Convert a date to a string:
console.log(myDate2.toString());    //output varies on time
//-> outputs: Wed Mar 19 2025 18:08:39 GMT+0545 (Nepal Time)

//-------------------
//-> Here, In Node.js, when you console.log() a Date object directly, it prints the result of .toISOString(), which is in UTC time (Z stands for "Zulu time," meaning UTC). 

//-> That means,
//-> In browsers case: console.log(new Date()) automatically applies toString() (displays local time).
//-> In Node.js case: console.log(new Date()) automatically applies toISOString() (displays UTC time).

//-> So, in Node.js, you must use .toString() if you want to see the local time! 😊
//---------------------







//-> The toDateString() method converts a date to a more readable format:

//-> Convert a date to a date string:
console.log(myDate2.toDateString());    //output varies on time
//-> outputs: Wed Mar 19 2025







//-> The toUTCString() method converts a date to a string using the UTC standard:

//-> Convert a date to a string using the UTC standard:
console.log(myDate2.toUTCString()); //output varies on time
//-> outputs: Wed, 19 Mar 2025 12:47:26 GMT
/*_____________________________________
Q. Is UTC Equivalent to GMT?
Final Answer: 
✅ In JavaScript, UTC and GMT are practically the same in daily use.
✅ If you see "Z" in an ISO date (2025-03-19T12:00:00.000Z), it means UTC (same as GMT+0).
✅ When working with JavaScript dates, prefer UTC (toISOString()) for consistency.
______________________________________*/







//-> The toISOString() method converts a date to a string using the ISO standard:

//-> Convert a date to a string using the ISO standard:
console.log(myDate2.toISOString()); //output varies on time
//-> outputs: 2025-03-19T12:54:19.286Z




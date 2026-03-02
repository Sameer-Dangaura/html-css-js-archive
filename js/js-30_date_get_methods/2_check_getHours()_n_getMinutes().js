// Checking what getHours() and getMinutes() displays in Node.js server, when date object created having user provided date excluding time:

const myDate1 = new Date("2020-01-01");

console.log(myDate1);//2020-01-01T00:00:00.000Z
console.log(myDate1.getHours());//5
console.log(myDate1.getMinutes());//45

//-> Why we get 5 hours and 45 minutes? 
//-> Ans:
//-> For this do visit "1_intro.js"


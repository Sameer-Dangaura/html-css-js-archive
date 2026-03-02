//-> This is the external script file for demonstrating switch case with getDay() method to get the current weekday as a number 0 to 6:
//-> (Sunday=0, Monday=1, Tuesday=2 ..)

const currentDate = new Date();

console.log(currentDate);//for debuging
console.log(currentDate.getDay());//for debuging

let currentday;

switch(currentDate.getDay()) {

    case 0: 
            currentday = "Sunday";
            break;

    case 1: 
            currentday = "Monday";
            break;

    case 2: 
            currentday = "Tuesday";
            break;

    case 3: 
            currentday = "Wednesday";
            break;

    case 4: 
            currentday = "Thursday";
            break;

    case 5: 
            currentday = "Friday";
            break;

    case 6: 
            currentday = "Saturday";
}

document.getElementById("demo").innerHTML = 
"Today is " + currentday;


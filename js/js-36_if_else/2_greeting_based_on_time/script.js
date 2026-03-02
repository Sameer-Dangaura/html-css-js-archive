//-> This script is for demonstrating the if...else condition:
//-> Example: greeting based on time:
 //-> if the time is less than 12 o'clock then, "Good Morning" greeting
 //-> if the time lies between (12 to  6 i.e.18) o'clock then, "Good Afternoon" greeting
 //-> if the time crosses the 6 i.e. 18 o'clock then, "Good Evening" greeting



//-> Creating a current date object:
const currentDate = new Date();

console.log(currentDate);//for debuging purpose
console.log(currentDate.getHours());//for debuging purpose

let greeting;

if(currentDate.getHours() < 12){
    greeting = "!Good Morning, dear";
}
else if(currentDate.getHours() >= 12 && 
currentDate.getHours() < 18){
    greeting = "Good Afternoon, dear";
}
else{
    greeting = "Good Evening, dear";
}

document.getElementById("demo").innerHTML = greeting;


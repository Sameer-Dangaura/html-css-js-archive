//-> External script file to secure a proper result. Variables should be converted to the proper type before comparison:

function myFunction() {

    let age = document.getElementById("age").value;    //getting the age from the text area input filed  element whose id=age, using    .value     property. The   .value      property is used to get or set the value of form elements (like <input>, <textarea>, and <select>).

    console.log("actual age:", age);//for debuging purpose
    console.log(typeof age);//for debuging purpose

    age = Number(age);  //converting to number explicitly

    console.log("converted to number", age);//for debuging purpose
    console.log(typeof age);//for debuging purpose

    
    let votable;

    if( isNaN(age) ){
        votable = "Input is not a number";
    }
    else{
        votable = (age < 18) ? "Too young" : "Old enough";
    }


    document.getElementById("demo").innerHTML = votable + " to vote";    //setting the value of voteable variable to element whose id=demo with the help of  .innerHTML
}


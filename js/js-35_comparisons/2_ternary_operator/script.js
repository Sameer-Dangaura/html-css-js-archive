//-> An external script file to demonstrating the ternary operator and its use:

/*__________________________________________
ternary operator Syntax: 

variablename = (condition) ? value1:value2 
___________________________________________*/


function myFunction() {
    
    let age = document.getElementById("age").value ;    //getting the age from the text area input filed  element whose id=age, using    .value     property. The   .value      property is used to get or set the value of form elements (like <input>, <textarea>, and <select>).

    let voteable = (age < 18) ? "Too young" : "Old enough";
    
    document.getElementById("demo").innerHTML = voteable + " to vote";   //setting the value of voteable variable to element whose id=demo with the help of  .innerHTML
}


//-> If the variable age is a value below 18, then: value of the variable voteable will be "Too young",      otherwise: the value of voteable will be "Old enough".



/*________________________________________________________
⚠️ Important Notes:

-> .value only works on input-related elements (like <input>, <textarea>, <select>).

❌ It does not work on <p>, <div>, <span>, etc.

-> For non-form elements, use .innerText or .innerHTML: which is done above.
________________________________________________________*/


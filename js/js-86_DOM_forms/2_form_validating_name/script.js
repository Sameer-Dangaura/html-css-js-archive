/*
External JS file for form validation:

HTML form validation can be done by JavaScript.

If a form field (fname) is empty, this function alerts a message, and returns false, to prevent the form from being submitted:

*/


function formValidate(){
    let check = document.forms["myForm"]["fname"].value;
    if(check == ""){
        alert("Please, enter your name");
        return false;
    }
}
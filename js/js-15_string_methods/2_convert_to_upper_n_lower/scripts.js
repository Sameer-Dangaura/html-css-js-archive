//-> External JavaScript file to converting the string to uppercase and lowercase using built-in methods: toLowerCase() and toUpperCase().

//-> function for converting upper case:
function upper(){
    let text1 = document.getElementById("upper").innerHTML; //getting the string contained by element whose  id="upper" with the help of   .innerHTML     and assiging that string to text1 variable.

    document.getElementById("upper").innerHTML = 
    text1.toUpperCase();    //now, setting the string to that element whose id="upper" with the help of         .innerHTML       after converting text1 string to upper case.
}


//-> function for converting lower case:
function lower(){
    let text2 = document.getElementById("lower").innerHTML;

    document.getElementById("lower").innerHTML = 
    text2.toLowerCase();
}

//-> Comparing Different Types
//-> :
//-> Comparing data of different types may give unexpected results.

//-> When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.                                               An empty string converts to 0.                            A non-numeric string converts to NaN which is always false.

console.log(2 < 12);    //Normal number comparision    
//-> outputs: true

console.log(2 < "12");  //"12" (string) is converted to 12 (number).    
//-> outputs: true

console.log(2 < "John");    //"John" (string) converts to NaN. Any comparison with NaN is always false.
//-> outputs: false

console.log("2" < "12");    //String comparison (alphabetical order): "2" is greater than "12" (because "2" comes after "1" in ASCII order).
//-> outputs: false




//________________________________________________________

//-> To secure a proper result, variables should be converted to the proper type before comparison:

/* 
age = Number(age);
if( isNaN(age) ){
    votable = "Input is not a number";
}
else{
    votable = (age < 18) ? "Too young" : "Old enough";
}
*/

//_________________________________________
//-> For this real implementation, do visit "3_comparing_diffn_type_(remain)" .
//_________________________________________



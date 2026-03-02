//-> Adding Strings and Numbers
//-> :
//->  Adding two numbers, will return the sum as a number like 5 + 5 = 10.

//-> Adding a number and a string, will return the sum as a concatenated string like 5 + "5" = "55".



let valueContainer1 = 5 + 5;
console.log(valueContainer1);   //outputs: 10
console.log(typeof valueContainer1);    //outputs: number


let valueContainer2 = "5" + "5";
console.log(valueContainer2);    //outputs: '55'
console.log(typeof valueContainer2); //outputs: string


let valueContainer3 = "Hello" + 5;
console.log(valueContainer3);    //outputs: 'Hello5'
console.log(typeof valueContainer3); //outputs: string


//-> Note
//-> :
//->  If you add a number and a string, the result will be a string!
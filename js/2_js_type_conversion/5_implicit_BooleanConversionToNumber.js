//-> 1) Implicit conversion (Automatic conversion):

//-> c) Implicit boolean conversion to Number
//-> :


let answer;

answer = '9' + true;    
//-> Here,  true  which is boolean is automatically converted into string. 
console.log(typeof(answer));    //outputs: string
console.log(answer);    //outputs: 9true


answer = '9' - true;
//-> Here,  true  which is boolean is automatically converted into number.
console.log(typeof(answer));    //outputs: number
console.log(answer);    //outputs: 8


answer = 10 + true;
//-> Here,  true  which is boolean is automatically converted into number.
console.log(answer);    //outputs: 11
console.log(typeof(answer));    //outputs: number
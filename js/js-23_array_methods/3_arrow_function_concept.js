//-> JavaScript Arrow Function
//-> :
//-> Arrow functions were introduced in ES6.

//-> Arrow functions allow us to write shorter function syntax:

let myFunction = (a, b) => a * b;

console.log( myFunction(4,4) ); //outputs: 16



//-> Above function without using Arrow:
//-> i) method-1: Function Declaration (which Can be called before its declaration due to hoisting.)
function myFunction2(a, b){
    return a * b;
}
console.log(myFunction2(5,5));  //outputs: 25


//-> ii) method-2: Function Expression (which Cannot be called before its definition.)
let myFunction3 = function(a, b){   //Here,  myFunction3 is a variable name since, it is declared using let also and here function name is anonymous and it invoked using variable name. That's why it is called Function Expression. 
    return a * b;
}
console.log(myFunction3(6,6));  //outputs: 36

//-> Tip: Arrow function concept came from function expression method. 😮
//-> That means, In Arrow function method function name is also anonymous 😮😮😮

//________________________________________________________


//-> Before Arrow: 
hello = function(){
    return "Hi, I'm from hello function";
}
console.log(hello());   //outputs: Hi, I'm from hello function



//-> After Arrow:
hello2 = () => {return "Hi, I'm from hello2 function";}
console.log(hello2());  //outputs: Hi, I'm from hello2 function


//-> It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:
hello3 = () => "Hi, I'm from hello3 function";
console.log(hello3());  //outputs: Hi, I'm from hello3 function

//-> Note: This works only if the function has only one statement.
//-----------------------------------------------------
//-> Imp point to remember 😮
//-> :
// hello3 becomes a global variable if you don’t declare it with const, let, or var.
//-> So, do always use it with declaration using keywords(const, let).
//-----------------------------------------------------

const hello4 = () => "Hi, I'm from hello4 function";
console.log(hello4());  //outputs: Hi, I'm from hello4 function
//-> Now, it is good. 😊

//________________________________________________________


//-> Here we gonna understand about the Arrow function inside map() method
//-> : 

//-> i) At 1st understading Function declaration method inside map() method:

//-> Without map() method: 
function mySquareFun(num1){
    return num1 * num1;
}
console.log(mySquareFun(2));    //outputs: 4


//-> Above function inside map() method:          (for this at 1st do visit to "3_map()_concept.js")
const numberList = [1,2,3];

const squareList2 = 
numberList.map(function mySquareFun2(num1){
    return num1 * num1;
});
console.log(squareList2);    //outputs: [ 1, 4, 9 ]

//-> OR,

const squareList = 
numberList.map( mySquareFun );  //here mySquareFun(i.e. callback function) is passed as a reference to map() method, and map() method calls it for each element in numberList.
//-> Here, you can observe that we didn't used parenthesis with mySquareFun. Since, we use to use parenthesis with function name while calling it i.e. mySquareFun().   But, when we want call function for each elements like as map() method, forEach() method then we just pass that function as a reference to that method and don't use parenthesis with it.

console.log(squareList);   //outputs: [ 1, 4, 9 ]


//------------------------------
//-> ii) Now, understading Function Expression method inside map() method:                                  (do visit to top at 1st, to understand Function Expression method and then come here.)

//-> Without map() method:
const mySquareFun3 =  function(num1){//is an anonymous function (no name), since it is function expression.
    return num1 * num1;
}
console.log(mySquareFun3(3));  //outputs: 9

//-> Above function inside map() method:          (for this at 1st do visit to "3_map()_concept.js")

const squareList4 =
numberList.map(function(num1){  //is an anonymous function (no name) that gets executed for each element.
    return num1 * num1;
})
console.log(squareList4);   //outputs: [ 1, 4, 9 ]

//-> OR,

const squareList3 = 
numberList.map( mySquareFun3 );   //here, mySquareFun3 is passed as a reference to a map() method, and map calls it for each element in numberList.                         And Why we didn't use parenthesis with it. For that do visit: Function declaration section.

console.log(squareList3);   //outputs: [ 1, 4, 9 ]



//------------------------------
//-> iii) Now, understading Arrow function inside map() method:

//-> Without map() method: 
const mySquareFun5 = num2 => num2 * num2;   //Here, num2 is defined as a Arrow function parameter and then used as num2 * num2.
console.log(mySquareFun5(4));  //outputs: 16

//-> OR,
let num3 = 4;
const mySquareFun6 = () => num3 * num3; //Here, num3 is not defined as function parameter and it is using actually a global variable inside Arrow function.
console.log(mySquareFun6());  //outputs: 16


//-> Above function inside map() method:          (for this at 1st do visit to "3_map()_concept.js")

const squareList5 =
numberList.map(num1 => num1 * num1);     
console.log(squareList5);   //outputs: [ 1, 4, 9 ]

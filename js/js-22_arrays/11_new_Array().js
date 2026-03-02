//-> JavaScript new Array()
//-> :
//-> JavaScript has a built-in array constructor new Array().

//-> But you can safely use [] instead.                 (is also recommended in "js-12_Object_Constructor/8_Built_in_js_Constructors_(must_visit).js")


//-> These two different statements both create a new empty array :

const myArray = new Array();    //Avoid using new Array(). Use [] instead.
const myarray = [];

console.log(typeof myArray);  //outputs: object
console.log(typeof myarray);  //outputs: object


//___________________________________________________

//-> These two different statements both create a new array containing 6 numbers:
const myList = new Array(10, 20, 30, 40);   //Avoid using new Array(). Use [] instead.
const mylist = [10, 20, 30, 40];

console.log(myList[0]); //outputs: 10
console.log(mylist[0]); //outputs: 10


//___________________________________________________

//-> Initialize array having only one element :

//-> using literal method do not create any problem:
const mycollection = [10];
console.log(mycollection[0]);   //outputs: 10
console.log(mycollection);   //outputs: [ 10 ]

//-> but,
//-> The new keyword can produce some unexpected results:
const myCollection = new Array(10);
console.log(myCollection[0]);   //outputs: undefined
console.log(myCollection);  
//-> outputs: [ <10 empty items> ]


//__________________________________________________

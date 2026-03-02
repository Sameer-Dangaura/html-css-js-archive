//-> Sorting Object Arrays
//-> :
//-> JavaScript arrays often contain objects:           (which is also discussed about it in "js-22_arryas/4_arrays_are_objects.js and 13_nested_arrays_n_objects.js" )


const myArray = [
    { type : "Volvo",   year : 2016},
    { type : "Saab",    year : 2001},
    { type : "BMW",     year : 2010}
];


//-> Even if objects have properties of different data types, the sort() method can be used to sort the array.

//-> The solution is to write a compare function to compare the property values:


myArray.sort(function(a, b) {//compare function to sort array's element(which are object) by property value. Is anonymous function Since, it is defined as function expression inside sort().
//->  a   and    b  are parameters which gonna take arguments pass by reference. (These types of discussion is also done in "3_user_defined_min_max_find.js")

    return  a.year - b.year;

});


console.log(myArray);   
/* outputs: 
[
  { type: 'Saab', year: 2001 },
  { type: 'BMW', year: 2010 },
  { type: 'Volvo', year: 2016 }
]
*/


//________________________________________________________


//-> Comparing string properties is a little more complex. For compare function to sort array's element(which are object) by property string.

const myArray2 = [
    { type : "Volvo",   year : 2016},
    { type : "Saab",    year : 2001},
    { type : "BMW",     year : 2010}
];


myArray2.sort(function(a, b) {
    
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    
    if(x < y) {
        return -1;  //i.e. similar to  x - y = -ve result
    }
    else{
        return 1;   //i.e. similar to  x - y = +ve result
    }
    return 0;   //x == y case i.e. neutral case
});


console.log(myArray2);
/* outputs: 
[
  { type: 'BMW', year: 2010 },
  { type: 'Saab', year: 2001 },
  { type: 'Volvo', year: 2016 }
]
*/


//________________________________________________________


//-> Stable Array sort()
//-> :
//-> ES2019 revised the Array sort() method.

//-> Before 2019, the specification allowed unstable sorting algorithms such as QuickSort.

//-> After ES2019, browsers must use a stable sorting algorithm:

//-> When sorting elements on a value, the elements must keep their relative position preserved to other elements with the same value(i.e. it must keep original order of equal elements).

const myArray3 = [   
    { name : "X04",    price : 110 },   
    { name : "X05",    price : 110 },   
    { name : "X06",    price : 110 },   
    { name : "X07",    price : 110 },
    { name : "X00",    price : 100 },   
    { name : "X01",    price : 100 },   
    { name : "X02",    price : 100 },   
    { name : "X03",    price : 100 },       
];


myArray3.sort( (x, y) => {// is an arrow function , which is also discussed in "js-23_array_methods/3_arrow_function_concept.js" .
//->  x   and    y   are parameters which gonna accept arguments pass by reference.

    if(x.price < y.price){
        return -1;
    }
    else{
        return 1;   //
    }
    return 0;   //x.price == y.price case i.e. neutral case 
} );


console.log(myArray3);
/* outputs:
[
  { name: 'X00', price: 100 },
  { name: 'X01', price: 100 },// Relative order preserved
  { name: 'X02', price: 100 },// Relative order preserved
  { name: 'X03', price: 100 },// Relative order preserved
  { name: 'X04', price: 110 },
  { name: 'X05', price: 110 },// Relative order preserved
  { name: 'X06', price: 110 },// Relative order preserved
  { name: 'X07', price: 110 }// Relative order preserved
]
*/


//-> Math.random()
//-> : Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

console.log(Math.random());     //return random number between 0 and 1.


//______________________________________________________
//-> Math.random() always returns a number lower than 1.
//______________________________________________________



//-> JavaScript Random Integers
//-> :
//-> Math.random() used with Math.floor() can be used to return random integers.

//-> There is no such thing as JavaScript integers.

//-> We are talking about numbers with no decimals here.


//-> i) 0 to 9:
console.log( Math.floor(Math.random() * 10) );  

//-> ii) 0 to 99:
console.log( Math.floor(Math.random() * 100) );

//-> iii) 0 to 10:  
console.log( Math.floor(Math.random() * 11) );      
//-> For iii) and iv) do visit "2_float_numbers_multiplication.md"

//-> iv) 0 to 100:
console.log( Math.floor(Math.random() * 101) );


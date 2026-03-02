//-> The () Operator
//-> :
//->  The () operator with function name (i.e. function_name()) invokes (calls) the function:


//Example: Convert Fahrenheit to Celsius:

function toCelsius( f ) {
    return (5/9) * (f - 32);
}

let temperatureInFahrenheit = 32;   

let temperatureInCelsius1 = 
toCelsius(temperatureInFahrenheit);

console.log(temperatureInFahrenheit, " F = ", temperatureInCelsius1, "C"); //outputs: 32 F =  0 C




//-> Accessing a function with incorrect parameters can return an incorrect answer:

let temperatureInCelsius2 = toCelsius();   //Here, we skipped to pass arguments or (actual parameters). 
console.log(temperatureInFahrenheit, " F = ", temperatureInCelsius2, "C"); //outputs: 32  F =  NaN C




//-> Accessing a function without () returns the function and not the function result:

let temperatureInCelsius3 = toCelsius;  //is actually passing a reference of function. This type of things is used in "js-22_arrays/7_looping_array_elements", "js-26_array_iteration/ 2_array_filter().js  and, 3_array_reduce().js " .

console.log(temperatureInCelsius3);    //outputs: [Function: toCelsius]

//-> 👇(scroll down)


//-> Note
//-> :
//->  As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.


//-> 😎 Bonus Tip
//-> :
//->  Whenever you want pass a function as an argument to another function or method, you will pass function object (e.g: toCelsius  only✅) not the function result (e.g: toCelsius() ).                                        This type of thing you will encounter in function callback, because there we gonna pass a function as an argument to another function.

//-> This type of things is used in "js-22_arrays/7_looping_array_elements", "js-26_array_iteration/ 2_array_filter().js  and, 3_array_reduce().js " .


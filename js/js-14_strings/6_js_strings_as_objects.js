//-> JavaScript Strings as Objects
//-> :
//-> Normally, JavaScript strings are primitive values, created from literals:

let text1 = "Hello";
console.log(text1);   //outputs: Hello
console.log(typeof text1);  //outputs: string



//-> But strings can also be defined as objects with the keyword new:

let text2 = new String("Hello");
//-> As we have already studied about JS object constructor function. Here,     new String()     gonna create a String object, 
//-> where    String()     is constructor function. And it is taking argument "Hello".

console.log(text2); //outputs: [String: 'Hello']
console.log(typeof text2);  //outputs: object


//____________________________________________________

//-> Do not create String objects.

//-> The      new      keyword complicates the code and slows down execution speed.

//-> String objects can produce unexpected results:

//-> For more, do visit: w3school.

//-> Comparing two JavaScript objects always returns false.

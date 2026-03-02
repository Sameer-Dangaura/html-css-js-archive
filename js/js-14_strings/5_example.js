//-> Before using backslash escape charater:

//let text1 = "We are the so-called "Vikings" from the north.";   
//-> SyntaxError: Unexpected identifier 'Vikings'



//-> Example-1: insert a double quote in a string using backslash escape character:

let text2 = "We are the so-called \"Vikings\" from the north.";
console.log(text2); //outputs: We are the so-called "Vikings" from the north.



//-> Example-2: insert a single quote in a string using backslash escape character:

let text3 = 'It\'s alright.';
console.log(text3); //outputs: It's alright.



//-> Example-3: insert a backslash in a string using backslash escape character:
let text4 = "The character \\ is called backslash."
console.log(text4); //outputs: The character \ is called backslash.

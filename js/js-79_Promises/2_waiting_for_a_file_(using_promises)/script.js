//-> External JS file for waiting for a file using promies: 

function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject){
    let request = new XMLHttpRequest();
    request.open('GET', "myCar.html");
    request.onload = function(){
        if(request.status == 200){
            myResolve(request.response);
        }
        else{
            myReject("File not found");
        }
    }
    request.send();
});

myPromise.then(
    function(value){myDisplayer(value);},
    function(error){myDisplayer(error);}
);


/*_______________________________________________________
Explaination:
------------
Great! You're now using JavaScript Promises to handle asynchronous operations like loading a file. Let’s walk through every line of this version step by step. 👇

✅ Code Breakdown:
___________________________________________________
function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}
___________________________________________________
Same as before: this function simply displays whatever content you pass into the element with id "demo".



_________________________________________________________
let myPromise = new Promise(function(myResolve, myReject){
_________________________________________________________
You’re creating a new Promise object.

The Promise constructor takes a function with two parameters:

- myResolve: call this when the task succeeds.

- myReject: call this when the task fails.

Think of this as the "producing code" section that either resolves or rejects based on a result.



________________________________________
    let request = new XMLHttpRequest();
    request.open('GET', "myCar.html");
________________________________________
Creating a classic AJAX request.

Setting it up to GET data from the file myCar.html.



_________________________________________
    request.onload = function(){
        if(request.status == 200){
            myResolve(request.response);
        }
        else{
            myReject("File not found");
        }
    }
_________________________________________
When the request completes:

- If the HTTP status is 200 (OK), call myResolve() with the file content.

- Otherwise, call myReject() with an error message.

These will later trigger either .then() or .catch() depending on the outcome.



____________________
    request.send();
____________________
Sends the request off to the server to get myCar.html.



________________________________________
myPromise.then(
    function(value){myDisplayer(value);},
    function(error){myDisplayer(error);}
);
________________________________________
This is the "consuming code".

If the promise is resolved (file successfully loaded), value is passed to myDisplayer().

If the promise is rejected (error occurred), error is shown instead.



🔁 Summary Flow:
----------------
- Promise is created and starts the AJAX request.

- When the request finishes:

If successful → .then() is called with file content.

If failed → .then()'s error handler is called.

Output is shown using myDisplayer() either way.




✅ This version is better than the callback version because:
- It's cleaner, more modern, and easier to chain or extend.

- You avoid "callback hell" when nesting async logic.

________________________________________________________*/


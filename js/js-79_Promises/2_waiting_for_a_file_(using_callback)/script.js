//-> External JS file for waiting for a file using callback:

function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}

function getFile(myCallback){
    let request = new XMLHttpRequest();
    request.onload = function() {
        if(request.status = 200){
            myCallback(this.responseText + "Request status: " + request.status);
        }
        else{
            myCallback("Error: " + request.status);
        }
    }

    request.open('GET', "myCar.html");
    request.send();
}

getFile(myDisplayer);

/*_______________________________________________________
Can you explain me every line of code which I provided you above.
Ans:
----


ChatGPT said:
Absolutely! Let's go through your code line by line, calmly and clearly — so you fully understand what’s happening. 😊

✅ Your Code:
___________________________________________________
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
___________________________________________________
🧠 Explanation:
- You define a function named myDisplayer that takes one argument some.

- Inside the function, it sets the innerHTML (content) of an element with ID "demo" to that some value.

Example: if some = "Hello", it will show "Hello" on the webpage.



_________________________________
function getFile(myCallback) {
_________________________________
You declare another function getFile that takes a parameter myCallback — a callback function that will be called after the file is loaded.



__________________________________
  let req = new XMLHttpRequest();
__________________________________
Create an XMLHttpRequest object named req. This is used to send HTTP requests to a server without reloading the page (classic AJAX).



_____________________________
  req.onload = function() {
_____________________________
You define what should happen when the request successfully completes.

This function runs when the file has been received.



___________________________________
    if (req.status == 200) {
      myCallback(this.responseText);
___________________________________
If the request was successful (HTTP status code 200 means "OK"):

Call myCallback() (which is myDisplayer in this case) with the file content.

this.responseText contains the contents of mycar.html.



________________________________________
    } else {
      myCallback("Error: " + req.status);
    }
________________________________________
If the status is not 200 (maybe 404, 500, etc.), it means there was a problem.

You pass an error message like "Error: 404" to the callback function.



__________
  }
__________
Closes the onload function.



________________________________
  req.open('GET', "mycar.html");
________________________________
Prepares the request.

'GET' means you are requesting data.

"mycar.html" is the name of the file you want to fetch from the server (must be in the same directory, unless a path is given).



_______________
  req.send();
_______________
Actually sends the request to the server.

The request is asynchronous — it doesn't block other code while waiting.



______________________
getFile(myDisplayer);
______________________
This calls getFile() and passes myDisplayer as a callback function.

So after the file is fetched, myDisplayer is called with either:

the file’s contents (if success)

or an error message (if failed)




🌐 Example Flow:
----------------
- Browser asks: “Get mycar.html from server”

- After 2 seconds, the server sends back: <h1>Car Info</h1>

- JavaScript runs myDisplayer("<h1>Car Info</h1>")

- Page updates to show that content in the demo element


________________________________________________________*/


//-> External JS file: basic for async and await:

async function myDisplay(){
    let myPromise = 
    new Promise(function(myResolve, myReject){
        myResolve("Hey, what's up ?");
    });
    document.getElementById("demo").innerHTML = 
    await myPromise;
}

myDisplay();

/*

The two arguments (resolve and reject) are pre-defined by JavaScript.

We will not create them, but call one of them when the executor function is ready.

Very often we will not need a reject function.

*/

/*______________________________________________________ 
✅ Step-by-step Explanation:
-----------------------------

1. async function myDisplay() { ... }
Declares an async function, meaning:

- It will return a Promise automatically.

- You are allowed to use await inside this function.


2. let myPromise = new Promise(...)
A new Promise is created manually using:
________________________________________
new Promise(function(resolve, reject) {
  resolve("I love You !!");
});
_________________________________________
This promise is resolved immediately with the value "I love You !!".


3. await myPromise
This pauses execution until the promise is resolved.

Since myPromise resolves immediately, it continues and gives "I love You !!" as the value.


4. document.getElementById("demo").innerHTML = await myPromise;
Once myPromise resolves, the string "I love You !!" is inserted into the HTML element with id="demo".


5. myDisplay();
This calls the myDisplay function to start the process.



🧠 Why use await here?
Even though the Promise resolves immediately, await gives you:

- Cleaner structure than .then()

- Flexibility for real-world cases like fetching data from a server



🔁 Visual Flow

1. myDisplay() is called
2. myPromise is created and resolved to "I love You !!"
3. await pauses until myPromise is resolved
4. Result is inserted into the DOM → "I love You !!"

________________________________________________________*/




/*________________________________________________________

Q. As you said:
"2. let myPromise = new Promise(...)
A new Promise is created manually using:" Is promise is also created without manually. If it can be done, how it is done show using above example


ChatGPT said:
Excellent question! Yes — Promises can be created both manually and automatically.


🔹 "Manual" Promise
You're already familiar with this form:
_______________________________________________________
let myPromise = new Promise(function(resolve, reject) {
  resolve("I love You !!");
});
_______________________________________________________
You're explicitly using new Promise(...) to create and control how it's resolved or rejected.



🔹 "Automatic" or Built-in Promises
JavaScript has built-in functions that return Promises automatically — you don’t have to create them manually.

📌 A good example is fetch(),                           (If you don't know fetch(), do scroll down to know from the "difference in fetch() and XMLHttpsrequest()" ). 

✅ Rewriting your example using fetch() instead of manually creating a Promise:
_____________________________________________
async function myDisplay() {
  try {
    const response = await fetch("data.txt"); // assuming data.txt contains "I love You !!"
    const text = await response.text();
    document.getElementById("demo").innerHTML = text;
  } catch (err) {
    document.getElementById("demo").innerHTML = "Error: " + err;
  }
}

myDisplay();
_______________________________________________
----------------------------------------------------------
🛠️ Understanding above code:

🧠 What’s Happening:

1. async function myDisplay()
- Declares a function that will use await inside it.

-  async    means this function returns a Promise automatically.



2. try { ... } catch (err) { ... }
- This is error-handling.

- Any error that happens in the try block is caught and handled in catch.



3. const response = await fetch("data.txt");
- 📡 This line sends a GET request to load data.txt from your server.

-  await   makes JavaScript wait for the fetch() Promise to resolve.

- response is a special Response object, not plain text yet.



4. const text = await response.text();
- 📦 .text() is a method that reads the response body and turns it into plain text.

- Again,  await   is used to wait until the text is fully loaded.



5. document.getElementById("demo").innerHTML = text;
- 🖼 Displays the final content (e.g., "I love You !!") inside the element with id demo.



6. If there's any error...
________________________________________________________
catch (err) {
  document.getElementById("demo").innerHTML = "Error: " + err;
}
________________________________________________________
If anything fails (like file not found), it will show the error in the same HTML element.



🧩 Visualization:
__________________________________________________
  async          // function will return a Promise
    ↓
myDisplay() --> fetch("data.txt")   // waits until the file is fetched
              --> response.text()   // waits until the content is read
              --> Displays result   // or shows error if any
___________________________________________________


🔄 Why This is Better Than XMLHttpRequest()?
- Cleaner, more readable.

- Uses Promises with await so it's easier to write like synchronous code.
----------------------------------------------------------


🔍 Key Point:
-------------
- Here, fetch() automatically returns a Promise.

- You're not using new Promise(...) — the browser gives you the Promise under the hood.



🔄 Summary:
------------
How	        Example	        Who creates the Promise?
----        --------        -------------------------
Manual	    new Promise(...)	You (the developer)

Automatic	fetch(), Response.text(), etc.	The browser or built-in API



Let me know if you’d like to see more built-in APIs that return promises or a diagram comparing manual vs automatic.









Q. You said:
is fetch() is similar to XMLHttpsrequest() 
Ans:
----
Note: If you don't about XMLHttpsrequest() we have already worked with in "js-79_Promises/2_waiting_for_a_file_(...).js" .

ChatGPT said:
Yes, fetch() is similar to XMLHttpRequest() in that both are used to request data from a server, but fetch() is a modern, cleaner, and promise-based alternative to the older XMLHttpRequest().


🔍 Key Differences:
Feature	        XMLHttpRequest()	        fetch()
--------        -----------------          ---------
📦 API Type: Old, callback-based	 Modern, Promise-based
😣 Syntax:	Verbose, nested callbacks	Cleaner with .then() or await
⚙️ Streams:	Harder to work with  	Easier to work with readable streams
❌ Aborts: Needs abort() manually 	Uses AbortController (modern and cleaner)
🔍 Readable?:	More complex	Easier to read and write
❗ Error Handling: Doesn't reject on HTTP errors	    Needs .ok check for HTTP status

🔧 Example: XMLHttpRequest
_______________________________
let xhr = new XMLHttpRequest();
xhr.open("GET", "data.txt");
xhr.onload = function() {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  } else {
    console.log("Error:", xhr.status);
  }
};
xhr.send();
________________________________



✅ Example: fetch()
___________________________________________________
fetch("data.txt")
  .then(response => {
    if (!response.ok) throw new Error("Network error");
    return response.text();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));
____________________________________________________
🛠️ In this above code, since  fetch()   returns promise. So, to consume that we used .then(callback) .


Or using async/await:

_________________________________________________
async function getData() {
  try {
    const res = await fetch("data.txt");
    if (!res.ok) throw new Error("Fetch error");
    const text = await res.text();
    console.log(text);
  } catch (err) {
    console.error(err);
  }
}
getData();
_________________________________________________


🟢 Recommendation:
Use fetch() in modern JS — it's simpler and integrates better with Promises and async/await.
________________________________________________________*/



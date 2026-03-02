alert("hello"); //displays popup message to the screen

document.getElementById("demo").innerHTML = 
  "This is first one paragraph from external js file.";


//------------------------------------------------------------------------
//What Happens When the above Code Runs:
//------------------------------------------------------------------------
//ans:
// When this HTML document is loaded in a browser:

//1. The browser parses the HTML and builds the structure of the page.

//2. It encounters the <p id="demo"></p> element, which is initially empty.

//3. When the script is executed, document.getElementById("demo") selects this empty paragraph element.

//4. The script then sets the innerHTML of this element to "This is first one paragraph from external js file.".

//5. As a result, the content of the paragraph with id="demo" is updated, and "This is first one paragraph from external js file." is displayed on the web page where the empty paragraph was.

// This demonstrates how JavaScript can dynamically change the content of an HTML element.
//-------------------------------------------------------------------------


//-------------------------------------------------------------------------
//What is document, getElementById(), "demo", and .innerHTML ?
//------------------------------------------------------------------------
//ans:

// 1. document

// Definition: document is a global object in JavaScript that represents the HTML document currently being displayed in the browser.

// Usage: It is         used to access and manipulate       the content and structure of the web page. It is part of the Document Object Model (DOM), which is an interface that allows scripts to update the content, structure, and style of a document.



// 2. getElementById()

// Definition: getElementById is a method of the document object. It is used to select a single HTML element based on its id attribute.

// Usage: It takes one argument, the id of the element you want to select, and returns a reference to the element if it is found; otherwise, it returns null.

// example:
// var element = document.getElementById("demo");



// 3. "demo"

// Definition: "demo" is a string that represents the id attribute of an HTML element.

// Usage: When used as an argument in the getElementById() method, it specifies the element you want to select.

// example:
// <p id="demo">This is a paragraph.</p>




// 4. .innerHTML

// Definition: .innerHTML is a property of an HTML element that represents the HTML content inside that element.

// Usage: It can be used to get or set the HTML content of an element.

// i) Getting the content:

// example:
// var content = document.getElementById("demo").innerHTML;
// console.log(content); // Outputs the current HTML content of the element with id="demo"


// ii) Setting the content:

// example:
// document.getElementById("demo").innerHTML = "Hello JavaScript!";

// This changes the HTML content inside the element with id="demo" to "Hello JavaScript!".





// Important Points related to .innerHTML:

// i) HTML Content: The value assigned to .innerHTML can include HTML tags, which will be rendered accordingly.

// //example:
// document.getElementById("demo").innerHTML = "<strong>Bold content</strong>";

// This will render the content inside the <p> element as bold.


// ii) Security Risks: Directly setting .innerHTML with user input or untrusted content can lead to security vulnerabilities such as Cross-Site Scripting (XSS) attacks. It's important to sanitize any input that is being set using .innerHTML.

//Tip: to learn more about it do visit: CoderPad's webpage "How to use innerHTML in JavaScript".    Scroll down that page for security risks related knowledge.
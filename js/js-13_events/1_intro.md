> JavaScript Events
-> :
-> HTML events are "things" that happen to HTML elements.

-> When JavaScript is used in HTML pages, JavaScript can "react" on these events.

_______________________________________________________


> HTML Events
-> :
-> An HTML event can be something the browser does, or something a user does.

-> Here are some examples of HTML events:

i) An HTML web page has finished loading
ii) An HTML input field was changed
iii) An HTML button was clicked



-> Often, when events happen, you may want to do something.

-> JavaScript lets you execute code when events are detected.

-> HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

i) With single quotes
-> :
-> <element event='some JavaScript'>


ii) With double quotes
-> :
-> <element event="some JavaScript"></element>

-> e.g:
-> <button onclick= 
"document.getElementById('demo').innerHTML = Date()">The time is?</button>
__________________________________________
-> From above example,

-> Event or Event type
-> : onclick (Triggered when the button is clicked)

-> Event Target or element
-> : The <button> element

-> Event Handler: The inline JavaScript inside onclick

-> Effect: Updates the <p id="demo"> element with the current date and time.
__________________________________________



# For more Examples: do visit "1_example-1, 1_example-2, 1_example-3"




________________________________________________________
Common HTML Events
:
-> Here is a list of some common HTML events:

Event	    Description
-----       -----------
onchange	An HTML element has been changed
onclick	    The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	    The browser has finished loading the page
________________________________________________________




> JavaScript Event Handlers
:
- Event handlers can be used to handle and verify user input, user actions, and browser actions:

* Things that should be done every time a page loads
* Things that should be done when the page is closed
* Action that should be performed when a user clicks a button
* Content that should be verified when a user inputs data
* And more ...


- Many different methods can be used to let JavaScript work with events:

* HTML event attributes can execute JavaScript code directly
* HTML event attributes can call JavaScript functions
* You can assign your own event handler functions to HTML elements
* You can prevent events from being sent or being handled
* And more ...


# You will learn a lot more about events and event handlers in the HTML DOM chapters.

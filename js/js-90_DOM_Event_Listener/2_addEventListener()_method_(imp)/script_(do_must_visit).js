//--------------------------------------------------------
//-> External JS file for demonstrating the addEventListener() method document:  (for code scroll ⬇️)
//--------------------------------------------------------

//-> The addEventListener() method attaches an event handler to the specified element.

//-> The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

//-> You can add many event handlers to one element.

//-> You can add many event handlers of the same type to one element, i.e two "click" events.

//-> You can add event listeners to any DOM object not only HTML elements. i.e the window object.

//-> When using the addEventListener() method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.


/*_______________________________________________________

🔤 What is addEventListener()?
: 
- addEventListener() is a method in JavaScript that attaches an event handler to an HTML element.

✍️ In simple words, it tells the browser:

"Hey, when this element is clicked / hovered / submitted / etc., run this function."



🧠 Basic Syntax:
_____________________________________________________
element.addEventListener(event, function, useCapture);
_____________________________________________________

- element:
The DOM element you want to listen on (like a button, input, or even the window).

- event:
A string like "click", "submit", "mouseover", "keydown", "load", etc.

- function:
The function to run when the event happens.

- useCapture (optional):
Usually false. You can ignore this for now unless learning advanced event flow.

✅ Simple Example:
___________________________________________________
<button id="myBtn">Click Me</button>

<script>
  document.getElementById("myBtn").addEventListener("click", function() {
    alert("You clicked the button!");
  });
</script>
___________________________________________________

The browser looks for an element with ID myBtn.

Then it listens for a "click" event.

When the button is clicked, it runs the function (shows an alert).


🔁🧐🧐  Benefits 👆👆 over Inline onclick=...
✅ You can add multiple listeners to the same element.
✅ Cleaner separation of HTML and JS code.
✅ Easier to remove listeners later using removeEventListener()
✅ Can attach listeners dynamically (e.g., after AJAX loads content).

🧪 Another Example:
_____________________________________________________
const inputBox = document.getElementById("myInput");

inputBox.addEventListener("input", function() {
  console.log("User is typing:", inputBox.value);
});
_____________________________________________________



⚠️ Common Events You Can Use:
Event Type	    Description
----------      ------------
"click"	        User clicks element
"mouseover"	    Mouse moves over element
"keydown"	    Key is pressed
"submit"	    Form is submitted
"input"	        User types in a field






Q. 🧐can you suggest more event type ?
Ans: 
----

ChatGPT said:
Absolutely! Here's a list of commonly used JavaScript event types, grouped by category, to help you explore more easily:

🔘 Mouse Events
Event Type	    Triggered When...
-----------     ------------------
"click"	        Mouse clicks an element
"dblclick"	    Mouse double-clicks an element
"mousedown"	    Mouse button is pressed down
"mouseup"	    Mouse button is released
"mouseover"	    Mouse moves onto an element
"mouseout"	    Mouse moves off an element
"mousemove"	    Mouse moves within an element
"contextmenu"	Right-click on an element

⌨️ Keyboard Events
Event Type	Triggered When...
----------  -----------------
"keydown"	Any key is pressed
"keyup"	    Key is released
"keypress"	Key is pressed (deprecated, use keydown)

🧾 Form/Input Events
Event Type	Triggered When...
----------  -----------------
"input"	    User types or modifies input (text, etc.)
"change"	Input field loses focus after value changed
"submit"	A form is submitted
"focus"	    Element gains focus
"blur"	    Element loses focus
"reset"	    A form is reset

🧱 Window & Document Events
Event Type	    Triggered When...
----------      ------------------
"load"	        Page or resource finishes loading
"resize"	    Browser window is resized
"scroll"	    User scrolls the page or element
"unload"	    Page is being unloaded
"beforeunload"	User is about to leave the page
"DOMContentLoaded"	HTML is fully loaded and parsed

🧪 Clipboard Events
Event Type	Triggered When...
----------  -----------------
"copy"	    Content is copied
"cut"	    Content is cut
"paste"	    Content is pasted

📦 Drag & Drop Events
Event Type	Triggered When...
----------  -----------------
"drag"	    Element is being dragged
"dragstart"	Dragging starts
"dragend"	Dragging ends
"dragenter"	Element being dragged enters a drop target
"dragleave"	Element being dragged leaves a target
"dragover"	Element is over a valid drop target
"drop"	    Dropped into a drop target

🔊 Media Events
Event Type	    Triggered When...
----------      ------------------
"play"	        Media begins to play
"pause"	        Media is paused
"ended"	        Media has finished playing
"volumechange"	Volume is changed
"timeupdate"	Current playback position changes


________________________________________________________*/

/*--------------------------------------------------------
Is addEventListener() method introduced to replace inline event handler like onclick="..." ?
Ans:
----

ChatGPT said:
Yes, exactly! ✅

The addEventListener() method was introduced to provide a better, cleaner, and more flexible alternative to inline event handlers like onclick="...". Let me explain clearly:

🔁 Traditional Inline Event Handling (Old Style)
_______________________________________________
<button onclick="sayHello()">Click Me</button>
_______________________________________________
- Simple, but not recommended for modern code.

- You can only assign one handler per event this way.

- Mixes JavaScript and HTML, which is less clean and harder to maintain.


✅ Modern Event Handling with addEventListener()
_________________________________________________
<button id="myBtn">Click Me</button>

<script>
  document.getElementById("myBtn").addEventListener("click", sayHello);

  function sayHello() {
    alert("Hello!");
  }
</script>
_________________________________________________


💡 Advantages:
Feature	                Inline Handler	addEventListener()
Multiple listeners allowed:	❌ No	    ✅ Yes
Separation of concerns:	❌ Mixed HTML & JS	✅ Clean JS only
Easier to manage/remove:	❌ Hard	        ✅ You can .removeEventListener()
Supports event options	❌ No	✅ Yes (like once, capture)


✨ Bonus: Add Multiple Handlers (Only possible with addEventListener())
_____________________________________________________
element.addEventListener("click", function1);
element.addEventListener("click", function2); // both will run
_____________________________________________________
With onclick = ..., the second assignment would overwrite the first.

✅ Conclusion:
Yes, addEventListener() was introduced as a modern, flexible, and scalable replacement for inline event handlers. You should always prefer it in real-world JavaScript projects.


📝 Note:
Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".
--------------------------------------------------------*/



//-> 👇👇Actual external JS code: 

let button = document.getElementById("mybutton");
button.addEventListener("click", displayMsg);

function displayMsg(){
  document.getElementById("demo").innerHTML = "Hello, dear";
}


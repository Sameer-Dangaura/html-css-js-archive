> CSS Dropdowns
-----------------

Examples:

>1. Basic Dropdown
Create a dropdown box that appears when the user moves the mouse over an element.

# Example Explained

HTML part:
----------
-> Use any element to open the dropdown content, e.g. a <span>, or a <button> element. 
    |*Do you get it? Why use <span>, or a <button> element.|
    Ans: Because a <span>, or a <button> both elements are      inline level element, which makes only the text area clickable or hoverable. And that is the motive of this example also, to make only the text area clickable.

-> Use a container element (like <div>) to create the dropdown content and add whatever you want inside of it.

-> Wrap a <div> element around the elements to position the dropdown content correctly with CSS.

CSS part:
---------
-> The .dropdown class uses position:relative, which is needed when we want the dropdown content to be placed right below the dropdown button (using position:absolute).

-> The .dropdown-content class holds the actual dropdown content. It is hidden by default, and will be displayed on hover (see below). Note the min-width is set to 160px. Feel free to change this. Tip: If you want the width of the dropdown content to be as wide as the dropdown button, set the width to 100% (and overflow:auto to enable scroll on small screens).

-> Instead of using a border, we have used the CSS box-shadow property to make the dropdown menu look like a "card".

-> The   :hover selector    is used to show the dropdown menu when the user moves the mouse over the dropdown button.




______________________________
# For more do visit w3schools.
______________________________


> CSS Layout - The display Property
------------------------------------
:
# The display property is the most important CSS property for controlling layout.



> The display Property
-------------------------
:
The     display     property is used to specify how an element is shown on a web page.

Every HTML element has a default display value, depending on what type of element it is. The default display value for most elements is     block or inline.

The     display     property is used to change the default display behavior of HTML elements.




> Block-level Elements
------------------------
:
A block-level element ALWAYS starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

The <div> element is a block-level element.
Examples of block-level elements:

* <div>
* <h1> - <h6>
* <p>
* <form>
* <header>
* <footer>
* <section>



> Inline Elements
------------------
:
An inline element DOES NOT start on a new line and only takes up as much width as necessary.

This is an inline <span> element inside a paragraph.

Examples of inline elements:

* <span>
* <a>
* <img>



> The display Property Values    (For this please, do visit w3schools)
--------------------------------
:
The display property has many values:

Value	              Description
------              ------------

* inline	          Displays an element as an inline element

* block	            Displays an element as a block element

* contents	        Makes the container disappear, making the child elements children of the element the next level up in the DOM

* flex	            Displays an element as a block-level flex container

* grid	            Displays an element as a block-level grid container

* inline-block	    Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values

* none	            The element is completely removed

* initial	          Sets this property to its default value

* inherit	          Inherits this property from its parent element

* and so on... 
# you can visit w3schools for more...





> Display: none;
:
display: none; is commonly used with JavaScript to hide and show elements without deleting and recreating them. Take a look at our last example on this page if you want to know how this can be achieved.(For this do vist w3schools)

The <script> element uses display: none; as default.

# (you will learn later to use this with JS )




> Override The Default Display Value
-------------------------------------
:
As mentioned, every element has a default display value. However, you can override this.

Changing an inline element to a block element, or vice versa, can be useful for making the page look a specific way, and still follow the web standards.

# A common example is making inline <li> elements for horizontal menus:

Example: do visit "override_default_display_value" folder.
____________________
li {
  display: inline;
}
____________________


# Note: Setting the display property of an element only changes how the element is displayed, NOT what kind of element it is. So, an inline element with display: block; is not allowed to have other block elements inside it.






* The following example displays <span> elements as block elements:

Example: do visit w3schools.
_________________
span {
  display: block;
}
_________________


* The following example displays <a> elements as block elements:

Example: do visit w3schools.
__________________
a {
  display: block;
}
__________________






> Hide an Element - display:none or visibility:hidden?
# (This will be mostly used by JS)
:
* display: none;
Hiding an element can be done by setting the display property to none. The element will be hidden, and the page will be displayed as if the element is not there:

Example: do visit "display_none" folder.
________________
h1.hidden {
  display: none;
}
________________



* visibility:hidden; also hides an element.

However, the element will still take up the same space as before. The element will be hidden, but still affect the layout:

Example: do visit "visibility_hidden" folder.
___________________
h1.hidden {
  visibility: hidden;
}
___________________


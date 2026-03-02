> CSS Links   (Already done in html part, you can visit)
------------
:
With CSS, links can be styled in many different ways.


In addition, links can be styled differently depending on what state they are in.

The four links states are:

* a:link - a normal, unvisited link
* a:visited - a link the user has visited
* a:hover - a link when the user mouses over it
* a:active - a link the moment it is clicked


Example:
____________________
/* unvisited link */
a:link {
  color: red;
}

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: hotpink;
}

/* selected link */
a:active {
  color: blue;
}
_____________________

# When setting the style for several link states, there are some order rules:
* a:hover MUST come after a:link and a:visited
* a:active MUST come after a:hover





> Example: do visit "The_cursor_Property" folder
:
This example demonstrates the different types of cursors (can be useful for links).



For more do visit w3schools.
____________________________